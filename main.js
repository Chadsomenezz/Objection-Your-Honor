
class Person{
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
}

class Prosecutor extends Person{
    constructor(name,age) {
        super(name,age);

    }
    prosecute(defendant,caseDescription){
        return {caseDescription,prosecutorName:this.name,prosecutorAge:this.age};

    }
}

class Defendant extends Person{
    constructor(name,age) {
        super(name,age);
        return {name:this.name,age:this.age};
    }
}

//Trial Court
class TrialCourt{
    static initiateTrial(defendant, prosecutor) {
        this.getVerdict(defendant,prosecutor)
    }
    static getVerdict(defendant,prosecutor){
        const {name,age} = defendant;
        const {maxAge,minAge,releaseDate,title} = prosecutor.caseDescription;
        const {prosecutorName,prosecutorAge} = prosecutor;
        let verdict = "Guilty";
        //Verdict of the case
        if(age < minAge || age > maxAge){
            verdict = "Not Guilty";
            console.log(`Name: ${name}\nAge: ${age}\nCase Title: ${title}\nFiled by: ${prosecutorName}\nVerdict: ${verdict}`)
        }
        if(verdict === "Guilty"){
            console.log(`Name: ${name}\nAge: ${age}\nCase Title: ${title}\nFiled by: ${prosecutorName}\nVerdict: ${verdict}\nRelease Date: ${releaseDate.toDateString()}`)
        }
    }
}

class Case{
    constructor(title,years,months,day,minAge,maxAge) {
        this.title = title;
        this.years = years;
        this.months = months;
        this.day = day;
        this.minAge = minAge;
        this.maxAge = maxAge;
        this.today = new Date();
        return this.computeReleaseDate(this.today.getTime())
    }
    computeReleaseDate(startDate){
        let releaseDate = startDate + (this.years * 3.1536E+10) + (this.day * 86400000) + (this.months * 2.6280E+9) ;
        return {releaseDate:new Date(releaseDate),title:this.title,minAge:this.minAge,maxAge:this.maxAge}
    }
}

let caseTitle = new Case("Malicious Mischief",3,3,3,18,75);
let prosecutor = new Prosecutor("john",30);
let defendant1 = new Defendant("Girlie",5);
prosecutor = prosecutor.prosecute(defendant1,caseTitle);
TrialCourt.initiateTrial(defendant1,prosecutor)

console.log(`\n`);

let prosecutor2 = new Prosecutor("john",30);
let defendant2 = new Defendant("One1",25);
prosecutor2 = prosecutor2.prosecute(defendant2,caseTitle);
TrialCourt.initiateTrial(defendant2,prosecutor2)