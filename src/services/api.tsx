class Api {
  static baseUrl = "https://coinbase-clone-felix-backend.onrender.com";

  /** Returns the stored JWT token (if any) */
  static getToken(): string | null {
    return localStorage.getItem("token");
  }

  /** Returns Authorization header if a token is stored, else empty object */
  static authHeaders(): Record<string, string> {
    const token = this.getToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  static async fetchCrypto() {
    try {
      const response = await fetch(`${this.baseUrl}/crypto/`, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...this.authHeaders(),
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  }

  static async fetchGainers() {
    try {
      const response = await fetch(`${this.baseUrl}/crypto/gainers/`, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...this.authHeaders(),
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  }

  static async fetchNewCrypto() {
    try {
      const response = await fetch(`${this.baseUrl}/crypto/new/`, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...this.authHeaders(),
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  }

  static async login(email: string, password: string) {
    try {
      const response = await fetch(`${this.baseUrl}/login`, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      // Store the token in localStorage so it works on Safari/iPhone
      // (Safari blocks cross-site cookies via ITP)
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      return data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  }

  static async signUp(name: string, email: string, password: string) {
    try {
      const response = await fetch(`${this.baseUrl}/register`, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      // Store the token in localStorage so it works on Safari/iPhone
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      return data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  }

  static async getProfile() {
    try {
      const response = await fetch(`${this.baseUrl}/profile`, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...this.authHeaders(),
        },
      });

      if (!response.ok) {
        return {error: true, status: response.status};
      }

      return await response.json();
    } catch (error) {
      console.error("Profile API Error:", error);
      throw error;
    }
  }

  static async isAuthenticated() {
    try {
      await this.getProfile();
      return true;
    } catch (e) {
      return false;
    }
  }

  static async logout() {
    try {
      const response = await fetch(`${this.baseUrl}/logout`, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...this.authHeaders(),
        },
      });

      // Always clear localStorage token on logout, even if the request fails
      localStorage.removeItem("token");

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      localStorage.removeItem("token");
      console.error("Logout API Error:", error);
      throw error;
    }
  }
}

export default Api;
