export const formatDate = (dateStr: string) => {
    return dateStr ? new Date(dateStr).toLocaleDateString('pt-BR') : '00/00/0000';
};