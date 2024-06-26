import type { Timestamps } from './Generic.js';

export interface Onboarding extends Timestamps {
    id?: number;
    user_id: number;
    progress: number;
    complete: boolean;
}
