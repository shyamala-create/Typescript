var Employee = /** @class */ (function () {
    function Employee(code, name) {
        var _this = this;
        this.display = function () { return console.log(_this.empCode + ' ' + _this.empName); };
        this.empName = name;
        this.empCode = code;
    }
    return Employee;
}());
var emp = new Employee(1, 'Ram');
emp.display();
var tech = /** @class */ (function () {
    function tech(Name, EducationalQualification, DateOfBirth, CommunicationAddress, Residence, Mobile, Email, TotalExp, Skill, ReportingManager, PANCARD) {
        var _this = this;
        this.Name = "Jai Venkateswara Technologies";
        this.EducationalQualification = "B TECH MCA MBA BSC MSC";
        this.DateOfBirth = "2/6/1988";
        this.CommunicationAddress = "233/3 Ground floor new thippasandra";
        this.Residence = "08025216666";
        this.Mobile = 9900367097;
        this.Email = "venkatesh.db@gmail.com";
        this.TotalExp = "1 years";
        this.Skill = "C,CPP all Lang  & 1 years";
        this.ReportingManager = "Venkatesh";
        this.PANCARD = "asu675901f";
        this.display = function () { return console.log(_this.Name + ' ' + _this.EducationalQualification + ' ' + _this.DateOfBirth + ' ' + _this.CommunicationAddress + ' ' + _this.Residence + ' ' + _this.Mobile + ' ' + _this.Email + ' ' + _this.TotalExp + ' ' + _this.Skill + ' ' + _this.ReportingManager + ' ' + _this.PANCARD); };
        this.Name = "Jai Venkateswara Technologies";
        this.EducationalQualification = "B TECH MCA MBA BSC MSC";
        this.DateOfBirth = "2/6/1988";
        this.CommunicationAddress = "233/3 Ground floor new thippasandra";
        this.Residence = "08025216666";
        this.Mobile = 9900367097;
        this.Email = "venkatesh.db@gmail.com";
        this.TotalExp = "1 years";
        this.Skill = "C,CPP all Lang  & 1 years";
        this.ReportingManager = "Venkatesh";
        this.PANCARD = "asu675901f";
    }
    return tech;
}());
var tec = new tech("Jai Venkateswara Technologies", "B TECH MCA MBA BSC MSC", "2/6/1988", "233/3 Ground floor new thippasandra", "08025216666", 9900367097, "venkatesh.db@gmail.com", "1 years", "C,CPP all Lang  & 1 years", "Venkatesh", "asu675901f");
tec.display();
var system_properties = /** @class */ (function () {
    function system_properties(Rating, Processor, Installed_Memory_RAM, System_Type, Pen_Touch, Computer_Name, Computer_Description, Windows_Edition) {
        var _this = this;
        this.display = function () { return console.log(_this.Rating + ' ' + _this.Processor + ' ' + _this.Installed_Memory_RAM + ' ' + _this.System_Type + ' ' + _this.Pen_Touch + ' ' + _this.Computer_Name + ' ' + _this.Computer_Description + ' ' + _this.Windows_Edition); };
        this.Rating = "4.5";
        this.Processor = "Intel® Core™ i5-2450 CPU";
        this.Installed_Memory_RAM = "4.00GB";
        this.System_Type = "64-bit Operating System";
        this.Pen_Touch = "No Pen or Touch Input is available for this Display";
        this.Computer_Name = "BALU-PC";
        this.Computer_Description = "WORKGROUP";
        this.Windows_Edition = " Windows7Ultimate";
    }
    return system_properties;
}());
var system = new system_properties("4.5", "Intel® Core™ i5-2450 CPU", "4.00GB", "64-bit Operating System", "No Pen or Touch Input is available for this Display", "BALU-PC", "WORKGROUP", " Windows7Ultimate");
system.display();
