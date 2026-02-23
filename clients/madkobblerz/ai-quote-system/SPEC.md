# AI Quote System — Technical Spec

## Overview

User uploads a photo of their shoe/bag/leather item → AI analyzes it → Returns instant repair quote.

---

## User Flow

```
┌─────────────────────────────────────────────────────────────┐
│                     LANDING PAGE                            │
│                                                             │
│    "Get an Instant Quote"                                   │
│    [Upload Photo] or [Take Photo]                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                     UPLOAD/CAPTURE                          │
│                                                             │
│    ┌─────────────────────┐                                 │
│    │                     │                                 │
│    │   [Photo Preview]   │                                 │
│    │                     │                                 │
│    └─────────────────────┘                                 │
│                                                             │
│    [Analyzing...] ← Claude Vision API                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                     QUOTE RESULT                            │
│                                                             │
│    ✓ Detected: Gucci Loafer                                │
│    ✓ Condition: Moderate heel wear, scuffed toe            │
│    ✓ Recommended: Heel repair + Leather conditioning       │
│                                                             │
│    ┌─────────────────────────────────────────┐             │
│    │  Estimated Quote: $95 - $120            │             │
│    └─────────────────────────────────────────┘             │
│                                                             │
│    [Book Appointment]  [Get Exact Quote]                   │
│                                                             │
│    ┌─────────────────────────────────────────┐             │
│    │  Name: _______________                   │             │
│    │  Phone: ______________                   │             │
│    │  Email: ______________                   │             │
│    │  [Submit]                                │             │
│    └─────────────────────────────────────────┘             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## API Design

### Endpoint: `POST /api/quote`

**Request:**
```json
{
  "image": "base64_encoded_image_string",
  "format": "jpeg" | "png" | "webp"
}
```

**Response:**
```json
{
  "success": true,
  "analysis": {
    "brand": "Gucci",
    "brand_tier": "designer",
    "item_type": "loafer",
    "material": "leather",
    "damage": [
      {
        "type": "heel_wear",
        "severity": "moderate",
        "description": "Heel worn down approximately 1/4 inch"
      },
      {
        "type": "scuff",
        "severity": "light",
        "location": "toe"
      }
    ],
    "recommended_services": [
      "heel_repair",
      "leather_conditioning"
    ],
    "confidence": 0.92
  },
  "quote": {
    "low": 95,
    "high": 120,
    "currency": "USD",
    "breakdown": [
      { "service": "Heel Repair", "price": "60-75" },
      { "service": "Leather Conditioning", "price": "35-45" }
    ]
  }
}
```

---

## Claude Vision Prompt

```
You are an expert cobbler and leather goods specialist. Analyze this image of a shoe or leather item and provide:

1. BRAND IDENTIFICATION
   - Identify the brand if visible (logo, style, distinctive features)
   - If unknown, estimate the quality tier (luxury, mid-range, budget)

2. ITEM TYPE
   - Type: shoe, boot, sandal, handbag, belt, wallet, etc.
   - Style: loafer, oxford, sneaker, heel, etc.
   - Material: leather, suede, exotic (crocodile, ostrich), synthetic

3. DAMAGE ASSESSMENT
   For each issue found:
   - Type of damage (heel wear, sole separation, scuff, crack, stain, etc.)
   - Severity (light, moderate, severe)
   - Location on the item
   - Brief description

4. RECOMMENDED SERVICES
   Based on the damage, recommend which repair services are needed:
   - sole_replacement
   - heel_repair
   - leather_conditioning
   - stitching_repair
   - cleaning_polish
   - full_restoration
   - color_restoration
   - hardware_repair

Respond in JSON format:
{
  "brand": "string or null",
  "brand_confidence": 0.0-1.0,
  "quality_tier": "budget" | "mid-range" | "designer" | "ultra-luxury",
  "item_type": "string",
  "item_style": "string",
  "material": "string",
  "is_exotic": boolean,
  "damage": [
    {
      "type": "string",
      "severity": "light" | "moderate" | "severe",
      "location": "string",
      "description": "string"
    }
  ],
  "recommended_services": ["string"],
  "overall_condition": "excellent" | "good" | "fair" | "poor",
  "confidence": 0.0-1.0,
  "notes": "string (any additional observations)"
}
```

---

## Pricing Logic

```typescript
interface PricingMatrix {
  services: {
    [key: string]: {
      base_low: number;
      base_high: number;
    };
  };
  multipliers: {
    brand_tier: {
      budget: number;
      'mid-range': number;
      designer: number;
      'ultra-luxury': number;
    };
    exotic: number;
    severity: {
      light: number;
      moderate: number;
      severe: number;
    };
  };
}

const PRICING: PricingMatrix = {
  services: {
    sole_replacement: { base_low: 80, base_high: 150 },
    heel_repair: { base_low: 40, base_high: 80 },
    leather_conditioning: { base_low: 30, base_high: 60 },
    stitching_repair: { base_low: 25, base_high: 50 },
    cleaning_polish: { base_low: 20, base_high: 40 },
    full_restoration: { base_low: 150, base_high: 400 },
    color_restoration: { base_low: 50, base_high: 100 },
    hardware_repair: { base_low: 30, base_high: 75 },
  },
  multipliers: {
    brand_tier: {
      budget: 0.8,
      'mid-range': 1.0,
      designer: 1.5,
      'ultra-luxury': 2.0,
    },
    exotic: 2.5,
    severity: {
      light: 0.8,
      moderate: 1.0,
      severe: 1.3,
    },
  },
};

function calculateQuote(analysis: Analysis): Quote {
  let totalLow = 0;
  let totalHigh = 0;
  const breakdown = [];

  // Get brand multiplier
  let multiplier = PRICING.multipliers.brand_tier[analysis.quality_tier];
  if (analysis.is_exotic) {
    multiplier = PRICING.multipliers.exotic;
  }

  // Calculate each service
  for (const service of analysis.recommended_services) {
    const base = PRICING.services[service];
    if (base) {
      const low = Math.round(base.base_low * multiplier);
      const high = Math.round(base.base_high * multiplier);
      totalLow += low;
      totalHigh += high;
      breakdown.push({
        service: formatServiceName(service),
        price: `${low}-${high}`,
      });
    }
  }

  return {
    low: totalLow,
    high: totalHigh,
    currency: 'USD',
    breakdown,
  };
}
```

---

## Implementation Steps

### Phase 1: MVP (Week 3)
1. [ ] Create API route (`/api/quote`)
2. [ ] Integrate Claude Vision API
3. [ ] Implement pricing logic
4. [ ] Build upload UI component
5. [ ] Display results

### Phase 2: Polish (Week 4)
1. [ ] Add loading states
2. [ ] Error handling (bad image, no shoe detected)
3. [ ] Lead capture form
4. [ ] Email notification to client
5. [ ] Save quotes to database

### Phase 3: Hyper Integration (Future)
1. [ ] Log all quotes to Hyper
2. [ ] Learn pricing patterns
3. [ ] Auto-adjust estimates based on actual repairs
4. [ ] Build customer memory (returning customers)

---

## Environment Variables

```env
ANTHROPIC_API_KEY=sk-ant-...
QUOTE_WEBHOOK_URL=https://...  # Notify client of new leads
DATABASE_URL=...               # Store quotes
```

---

## Cost Estimate

Claude Vision API:
- ~$0.01-0.03 per image analysis
- 1000 quotes/month = $10-30/month

Very cost-effective for the value delivered.
