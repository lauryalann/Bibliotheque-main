document.addEventListener('DOMContentLoaded', () => {
    fetchMembers();

    const addMemberForm = document.getElementById('add-member-form');
    addMemberForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nom = document.getElementById('nom').value;
        const adresse = document.getElementById('adresse').value;
        const telephone = document.getElementById('telephone').value;

        try {
            const response = await axios.post('/api/members', { nom, adresse, telephone });
            console.log('Member added:', response.data);
            fetchMembers();
        } catch (error) {
            console.error('Error adding member:', error);
        }
    });
});

async function fetchMembers() {
    try {
        const response = await axios.get('/api/members');
        const members = response.data;
        const memberList = document.getElementById('member-list');
        memberList.innerHTML = '';

        members.forEach(member => {
            const memberItem = document.createElement('div');
            memberItem.innerHTML = `<strong>${member.nom}</strong>, ${member.adresse}, ${member.telephone}`;
            memberList.appendChild(memberItem);
        });
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}
