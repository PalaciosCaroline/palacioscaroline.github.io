const btnAccueilProjet = document.getElementById('btnAccueilProjet');
const AccueilProjetExplic = document.getElementById('AccueilProjetExplic');

btnAccueilProjet.addEventListener('click', () => {
    AccueilProjetExplic.classList.toggle('isVisible')
})