class bank1
{
   public creditcard;minimum;outstand;
constructor(creditcard:number,minimum:number,outstand:number)
{
this.creditcard=creditcard
this.minimum=minimum
this.outstand=outstand
}
that()
{
console.log(this.outstand)
}
}
let taht1=new bank1(6146496758938152, 272.36,571.36)
taht1.that();

class employe{
    public Name; EducationalQualification;DateOfBirth;CommunicationAddress;Residence;Mobile ;Email;TotalExp;Skill;ReportingManager;PANCARD;
    constructor(Name:string, EducationalQualification:string,DateOfBirth:string,CommunicationAddress:string,Residence:string,Mobile:number ,Email:string,TotalExp:string,Skill:string,ReportingManager:string,PANCARD:string)
    {
    this.Name ="Jai Venkateswara Technologies"
    this.EducationalQualification="B TECH MCA MBA BSC MSC"
    this.DateOfBirth ="2/6/1988"
    this.CommunicationAddress="233/3 Ground floor new thippasandra"
    this.Residence="08025216666"
    this.Mobile =9900367097
    this.Email="venkatesh.db@gmail.com"
    this.TotalExp="1 years"
    this.Skill="C,CPP all Lang  & 1 years"
    this.ReportingManager ="Venkatesh"
    this.PANCARD ="asu675901f"
    }
    print()
    {
    console.log(this.Name, this.EducationalQualification,this.DateOfBirth,this.CommunicationAddress,this.Residence, this.Mobile, this.Email, this.TotalExp, this.Skill, this.ReportingManager, this.PANCARD )
    }
    }
    var details = new employe("Jai Venkateswara Technologies","B TECH MCA MBA BSC MSC","2/6/1988","233/3 Ground floor new thippasandra","08025216666",9900367097,"venkatesh.db@gmail.com","1 years","C,CPP all Lang  & 1 years","Venkatesh","asu675901f")
    details.print();

    class system_properties{
        public Rating;Processor;Installed_Memory_RAM;System_Type; Pen_Touch;Computer_Name;Computer_Description ;Windows_Edition;
        constructor(Rating:string,Processor:string,Installed_Memory_RAM:string,System_Type:string,Pen_Touch:string,Computer_Name:string,Computer_Description:string ,Windows_Edition:string){
        this.Rating = "4.5"
        this.Processor = "Intel® Core™ i5-2450 CPU"
        this.Installed_Memory_RAM= "4.00GB"
        this.System_Type = "64-bit Operating System"
        this.Pen_Touch = "No Pen or Touch Input is available for this Display"
        this.Computer_Name = "BALU-PC"
        this.Computer_Description = "WORKGROUP"
        this.Windows_Edition =" Windows7Ultimate"
        }
        display(){
        console.log(this.Rating,this.Processor,this.Installed_Memory_RAM,this.System_Type,this.Pen_Touch,this.Computer_Name,this.Computer_Description,this.Windows_Edition)
        }
        }
        var laptop = new system_properties("4.5","Intel® Core™ i5-2450 CPU","4.00GB","64-bit Operating System","No Pen or Touch Input is available for this Display","BALU-PC","WORKGROUP"," Windows7Ultimate")
        laptop.display()

        class Moviee{
            public Theatre_name;multiplex_Screen;movie_certification;first_price_per_ticket;Number_of_tickets;seat_numbers;Total_amount
            constructor(Theatre_name:string,multiplex_Screen:string,movie_certification:string, first_price_per_ticket:string ,Number_of_tickets:string,seat_numbers:string,Total_amount:string){
            this.Theatre_name= "PSS" 
            this.multiplex_Screen = "screen 3" 
            this.movie_certification = "U class " 
            this.first_price_per_ticket =" Rs.1050.00 "
            this.Number_of_tickets = "5 "
            this.seat_numbers ="c1,c2,c3,c4,c5" 
            this.Total_amount ="Rs.750.00"
            }
            display()
            {
            console.log(this.Theatre_name,this.multiplex_Screen,this.movie_certification,this.first_price_per_ticket,this.seat_numbers, this.Total_amount)
            }
            }
            var plex= new Moviee("PSS","screen 3","U class "," Rs.1050.00 ","5 ","c1,c2,c3,c4,c5" ,"Rs.750.00")
            plex.display()

            class Creating_Google_Account{
                public First_Name;Last_Name;Choose_Username;Creat_a_Password;Confirm_Your_Password;Birthday;Gender;Mobile;Your_current_email_address
                constructor(First_Name:string,Last_Name:string,Choose_Username:string,Creat_a_Password:string,Confirm_Your_Password:string,Birthday:string,Gender:string,Mobile:number ,Your_current_email_address:string){
                this.First_Name = "venkatesh"
                this.Last_Name = "d b"
                this.Choose_Username ="jvt"
                this.Creat_a_Password =" balu"
                this.Confirm_Your_Password =" balu"
                this.Birthday ="2-6-1986"
                this.Gender =" male"
                this.Mobile = 9900367097
                this.Your_current_email_address ="venkatesh.db@gmail.com"
                }
                display()
                {
                console.log(this.First_Name,this.Last_Name,this.Choose_Username ,this.Creat_a_Password,this.Confirm_Your_Password,this.Birthday,this.Gender,this.Mobile,this.Your_current_email_address)
                }
                }
                var google=new Creating_Google_Account("venkatesh","d b","jvt"," balu"," balu","2-6-1986"," male",9900367097,"venkatesh.db@gmail.com")
                google.display()

                class Banking_SBI_statement{
                    public Bank_Name;Date;Time;ATM_No;CARD_No;BRANCH_NAME;Txn_No;Response_code;With_Drawl;From_AC;Mod_RS;Available_Bal_Rs;Website;
                    constructor(Bank_Name:string,Date:string,Time:string,ATM_No:string,CARD_No:string,BRANCH_NAME:string,Txn_No:string,Response_code:string,With_Drawl:string,From_AC:string,Mod_RS:string,Available_Bal_Rs:string,Website:string){
                    this.Bank_Name="SBI Bank"
                    this.Date=" 29/05/14"
                    this.Time=" 19:48"
                    this.ATM_No = "SJNBL48"
                    this.CARD_No=" xxxx xxxxx xxxx 0516"
                    this.BRANCH_NAME="Bangalore Main Branch"
                    this.Txn_No ="2907"
                    this.Response_code = "072"
                    this.With_Drawl ="500.00"
                    this.From_AC =" xxxxxxxxxx05 xx01"
                    this.Mod_RS =" 0.00"
                    this.Available_Bal_Rs=" 1000.00"
                    this.Website =" www.statebankof india.co"
                    }
                    display()
                    {
                    console.log(this.Bank_Name,this.BRANCH_NAME)
                    }
                    }
                    var shaaaa=new Banking_SBI_statement("SBI Bank"," 29/05/14"," 19:48","SJNBL48"," xxxx xxxxx xxxx 0516","Bangalore Main Branch","2907","072","500.00"," xxxxxxxxxx05 xx01", " 0.00", " 1000.00"," www.statebankof india.co")
                    shaaaa.display()

                    class Vehicle_information{
                        public Vehicle_type;vehicle_car_Colour;Engine_number;Chassis_number;Company;
                        constructor(Vehicle_type:string,vehicle_car_Colour:string,Engine_number:string,Chassis_number:string,Company:string){
                        this.Vehicle_type="light motor"
                        this.vehicle_car_Colour="red" 
                        this.Engine_number="kp98gtyihh457797 "
                        this.Chassis_number="tc5678898335r45"
                        this.Company="BMW"
                        }
                        display()
                        {
                        console.log(this.Vehicle_type,this.vehicle_car_Colour,this.Engine_number,this.Chassis_number,this.Company)
                        }
                        }
                        var bmw=new Vehicle_information("light motor","red","kp98gtyihh457797 ","tc5678898335r45","BMW")
                        bmw.display()
                        