// utils/formatDate.ts

export function formatDateBR(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return new Intl.DateTimeFormat('pt-BR', options).format(new Date(dateString));
}



export function formatDateUS(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
    };

    return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
}

