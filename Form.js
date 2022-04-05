class Form{
    constructor(){
        this.title=createElement("h2");
        this.nombredelproducto=createElement("h3");
        this.departamento=createElement("h3");
        this.preciodelproducto=createElement("h3");
        this.descripcion=createElement("h3");
        this.stock=createElement("h3");
        this.inputN = createInput();
        this.inputP = createInput();
        this.inputF = createInput();
        this.inputR = createInput()
        this.inputK = createInput()
        this.button = createButton("registrar");
    } 
    display(){
        this.title.html("registro de prodructo");
        this.title.position(130,0);
        this.nombredelproducto.html("ingresa el nombre del producto");
        this.nombredelproducto.position(130,100);
        this.inputN.position(130,160);
        this.departamento.html("ingresa el nombre del departamento");
        this.departamento.position(500,100);
        this.inputP.position(600,150);
        this.preciodelproducto.html("ingresa el precio del producto");
        this.preciodelproducto.position(130,200);
        this.inputF.position(130,270);
        this.descripcion.html("descripcion del producto");
        this.descripcion.position(600,200);
        this.inputR.position(600,250);
        this.stock.html("introduce el stock");
        this.stock.position(130,300);
        this.inputK.position(130,350);
        this.button.position(300,400);

        this.button.mousePressed(()=>{
            producto.nombredelproducto=this.inputN.value();
            producto.departamento=this.inputP.value();
            producto.preciodelproducto=this.inputF.value();
            producto.descripcion=this.inputR.value();
            producto.stock=this.inputK.value();
            producto.update();
        })
    }
}