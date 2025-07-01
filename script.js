function openForm(category) {
    if (category === 'estudantil') {
        // Abrir formulário do Google para estudantes
        window.open('https://forms.gle/ti-form-id-student', '_blank');
    } else if (category === 'comunidade') {
        // Abrir formulário do Google para comunidade
        window.open('https://forms.gle/ti-form-id-comunity', '_blank');
    }
}