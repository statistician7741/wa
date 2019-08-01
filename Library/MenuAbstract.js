class MenuAbstract {
    constructor( label, position, subMenu = []) {
        this.label = label;
        this.position = position;
        this.subMenu = subMenu?subMenu:[];
        this.pilihanKembali = "\n99. Menu sebelumnya";
        this.pilihanAwal = "\n0. Menu awal";
    }

    showMenu(){
        if(this.subMenu.length){
            let menu = '';
            this.subMenu.forEach((menu, i)=>{
                menu += `${menu.position}. ${menu.label}\n`
            })
            return menu;
        } else{
            return 'Tidak ada menu';
        }
    }
}

let MenuUtama = new MenuAbstract( 'Menu Utama', '0', [{ label: 'Pulsa', position: '1', subMenu: [] }] )
console.log('heelo');
console.log(MenuUtama.showMenu());

module.exports = MenuAbstract;