const formatPhone = (phoneStr: string) => {
    const cleaned = ('' + phoneStr).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/);
    return match ? `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}` : phoneStr;
  };

export default formatPhone