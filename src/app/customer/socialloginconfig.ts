import { AuthServiceConfig, FacebookLoginProvider } from 'angular5-social-login';

export function getAuthServiceConfigs() {
    const config = new AuthServiceConfig([
        {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('2300056516897407')
        }
    ]);
    return config;
}