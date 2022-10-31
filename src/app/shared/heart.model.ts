export class Heart { 
    constructor(
        public full: Boolean, 
        public urlFullHeart: string = 'assets/coracao_cheio.png', 
        public urlEmptyHeart: string = 'assets/coracao_vazio.png'
    ){}

    public displayHeart(): string {
        if(this.full){
            return this.urlFullHeart;
        }else {
            return this.urlEmptyHeart
        }
    }
}