# The Cobbler Guy — Client Project

> Luxury shoe & leather repair with AI-powered quoting

**Client:** The Cobbler Guy (Guillaume Berteau)  
**Retainer:** $2,500/mo  
**Status:** 🟢 ACTIVE  
**Start Date:** Feb 22, 2026

---

## DELIVERABLES

### 1. Brand Identity
- [ ] Logo design
- [ ] Color palette
- [ ] Typography system
- [ ] Brand guidelines PDF

### 2. Landing Page
- [ ] Hero section (value prop + CTA)
- [ ] How it works (3 steps)
- [ ] Services grid
- [ ] AI Quote feature showcase
- [ ] Testimonials
- [ ] Footer + contact

### 3. AI Quote System
- [ ] Photo upload UI (mobile-first)
- [ ] Claude Vision integration (brand detection)
- [ ] Pricing matrix lookup
- [ ] Instant quote display
- [ ] Lead capture (name, email, phone)

---

## TECH STACK

### Landing Page
- **Framer** (fast, looks premium, easy handoff)
- OR **Next.js + Tailwind** (if they need custom backend)

### AI Quote System
- **Frontend:** React component in Framer/Next
- **Backend:** API route or serverless function
- **AI:** Claude Vision API (Anthropic)
- **Flow:**
  1. User uploads photo
  2. Send to Claude Vision
  3. Parse: brand, item type, damage assessment
  4. Lookup pricing matrix
  5. Return quote + capture lead

---

## PRICING MATRIX (Draft — Needs Client Input)

### Base Repair Prices
| Service | Price Range |
|---------|-------------|
| Sole replacement | $80-150 |
| Heel repair | $40-80 |
| Leather conditioning | $30-60 |
| Stitching repair | $25-50 |
| Full restoration | $150-400 |
| Cleaning & polish | $20-40 |

### Brand Multipliers
| Tier | Brands | Multiplier |
|------|--------|------------|
| Standard | Generic, mall brands | 1.0x |
| Designer | Gucci, Prada, LV, Ferragamo | 1.5x |
| Ultra-luxury | Hermès, Chanel, Berluti | 2.0x |
| Exotic | Crocodile, ostrich, python | 2.5x |

---

## QUESTIONS FOR CLIENT

1. **Name confirmation:** MadKobblerz or MadCobblers?
2. **Services:** Full list of what they offer?
3. **Pricing:** Actual price ranges for each service?
4. **Brands:** Do they specialize in luxury or all shoes?
5. **Location:** Physical store? Service area?
6. **Shipping:** Mail-in service available?
7. **Turnaround:** Typical repair times?
8. **Photos:** Any existing brand assets, photos of work?

---

## TIMELINE

### Week 1
- [ ] Get client answers to questions
- [ ] Brand direction (2-3 concepts)
- [ ] Landing page wireframe

### Week 2
- [ ] Logo final
- [ ] Brand guidelines
- [ ] Landing page design (Figma/Framer)

### Week 3
- [ ] Landing page build
- [ ] AI quote system prototype

### Week 4
- [ ] Integration + testing
- [ ] Launch

---

## FILES

```
/brand           → Logo files, color palette, typography
/website         → Framer project or Next.js code
/ai-quote-system → API code, Claude prompts, pricing logic
/assets          → Photos, icons, client-provided materials
/deliverables    → Final files to hand off
```

---

## NOTES

- Mobile-first design (customers will photograph from phone)
- Premium dark aesthetic (luxury positioning)
- AI quote is the differentiator — make it feel magical
- Hyper integration later (learning customer patterns)

---

*Created: Feb 22, 2026*
