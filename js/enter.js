function enter() {
    var id = 'guest';
    if(id != 'admin') {
        alert('auth error');
        return;
    }
    alert('success');
}