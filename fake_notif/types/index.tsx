// types.ts
export interface AppState {
    title: string;
    descirption: string
    // Ajoutez d'autres propriétés de l'état au besoin
}

export type AppAction = {
    type: string;
    payload: any; // Vous pouvez typer cela plus précisément selon vos actions
};