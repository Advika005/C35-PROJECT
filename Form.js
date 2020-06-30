class Form{
    constructor(){
        this.input1 = createInput("NAME");
        this.input2 = createInput("EMAIL ADDRESS");

        this.question1 = createElement('h3',"Q1: Are you concerned about plastic pollution and waste?");
        this.question2 = createElement('h3',"Q2: how often do you use plastic?");
        this.question3 = createElement('h3',"Q3: Do you recycle plastic?");
        this.question4 = createElement('h3',"Q4: how long does it take to decompose plastic?");

        this.options1 = createRadio("radio");
        this.options1.option('YES');
        this.options1.option('NO');
        this.options1.option('A LITTLE');

        this.options2 = createRadio("radio");
        this.options2.option('VERY OFTEN');
        this.options2.option('LESS OFTEN');
        this.options2.option('NEVER');

        this.options3 = createRadio("radio");
        this.options3.option('YES');
        this.options3.option('NO');
        this.options3.option('SOMETIMES');

        this.options4 = createRadio("radio");
        this.options4.option('50 yrs');
        this.options4.option('100 yrs');
        this.options4.option("DOESN'T DECOMPOSE");


       


        
        this.button = createButton("SUBMIT");
        
        
    }
    
    
    

    display(){
        var title = createElement('h2');
        title.html("AVOID PLASTIC");
        title.position(600,0);

        

        this.input1.position(650,80);
        this.input2.position(650,110);

        this.button.position(1200,550);
        

        this.question1.position(100,150);
        this.question2.position(700,150);
        this.question3.position(100,300);
        this.question4.position(700,300);

        this.options1.position(100,200);
        this.options2.position(700,200);
        this.options3.position(100,350);
        this.options4.position(700,350);
       
        this.button.mousePressed(()=>{
            person.input1 = this.input1.value();
            person.input2 = this.input2.value();

            person.options1 = this.options1.value();
            person.options2 = this.options2.value();
            person.options3 = this.options3.value();
            person.options4 = this.options4.value();

            playerCount+= 1;
			person.index = playerCount;
			person.update();
			person.updateCount(playerCount);
        })
        
    }
}