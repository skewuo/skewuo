interface LoginCredentials {
    email: string;
    password: string;
}
interface RegisterCredentials extends LoginCredentials {
    name: string;
}
interface AuthResponse {
    token: string;
    message?: string;
}
export declare const authService: {
    login(credentials: LoginCredentials): Promise<AuthResponse>;
    register(credentials: RegisterCredentials): Promise<AuthResponse>;
    setToken(token: string): void;
    getToken(): string | null;
    removeToken(): void;
    isAuthenticated(): boolean;
};
export {};
