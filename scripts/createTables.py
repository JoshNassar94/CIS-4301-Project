filename = "makeTables.sql"
open(filename, 'w').close()
SQL = open(filename, 'w+')

url = "http://www.cise.ufl.edu/~jnassar/performQuery.php"
print "Set the URL as: " + url + "."

query = "Create table Person(PersonID integer not null, FirstName varchar(255), LastName varchar(255), Gender varchar(1), BirthDate date, primary key(PersonID))"
SQL.write(query + ";\n")

query = "Create table Facility(FacilityID integer not null, Street varchar(255), City varchar(255), State varchar(2), Zip varchar(5), Facility varchar(255), primary key(FacilityID))"
SQL.write(query + ";\n")

query = "Create table IntramuralTeam(TeamID integer not null, Name varchar(255), SportType varchar(255), Wins integer, Losses integer, primary key(TeamID))"
SQL.write(query + ";\n")

query = "Create table Activity(ActivityID integer not null, FacilityID integer, AcitivtyDate date, Time timestamp, primary key(ActivityID), foreign key(FacilityID) references Facility(FacilityID))"
SQL.write(query + ";\n")

query = "Create table UfAffiliate(UFID integer not null, Email varchar(255), PhoneNumber varchar(13), ActivitiesFee varchar(1), Affiliation varchar(1), PersonID integer, PasswordHash varchar(255), primary key(UFID), foreign key(PersonID) references Person(PersonID))"
SQL.write(query + ";\n")

query = "Create table Guest(GuestID integer not null, Sponsor integer, ExpirationDate date, PersonID integer, primary key(GuestID), foreign key(Sponsor) references UfAffiliate(UFID), foreign key(PersonID) references Person(PersonID))"
SQL.write(query + ";\n")

query = "Create table CheckIn(CheckInID integer not null, PersonID integer, Time timestamp, CheckInDate date, FacilityID integer, ActivityID integer, primary key(CheckInID), foreign key(PersonID) references Person(PersonID), foreign key(FacilityID) references Facility(FacilityID), foreign key(ActivityID) references Activity(ActivityID))"
SQL.write(query + ";\n")

query = "Create table Equipment(EquipmentID integer not null, EquipmentType varchar(255), EquipmentStatus varchar(1), FacilityID integer, EquipmentCondition varchar(1), primary key(EquipmentID), foreign key(FacilityID) references Facility(FacilityID))"
SQL.write(query + ";\n")

query = "Create table EquipmentTransaction(TransactionID integer not null, EquipmentID integer, PersonID integer, TransactionDate date, Time timestamp, TransactionType varchar(1), primary key(TransactionID), foreign key(EquipmentID) references Equipment(EquipmentID), foreign key(PersonID) references Person(PersonID))"
SQL.write(query + ";\n")

query = "Create table Class(ClassID integer not null, Name varchar(255), Capacity integer, ActivityID integer, InstructorID integer, primary key(ClassID), foreign key(ActivityID) references Activity(ActivityID), foreign key(InstructorID) references UfAffiliate(UFID))"
SQL.write(query + ";\n")

query = "Create table IntramuralGame(GameID integer not null, SportType varchar(255), ActivityID integer, Team1Score integer, Team2Score integer, Team1ID integer, Team2ID integer, primary key(GameID), foreign key(Team1ID) references IntramuralTeam(TeamID), foreign key(Team2ID) references IntramuralTeam(TeamID), foreign key(ActivityID) references Activity(ActivityID))"
SQL.write(query + ";\n")

query = "create table IntramuralTeamRoster(TeamID integer, UfAffiliate integer, foreign key(TeamID) references IntramuralTeam(TeamID), foreign key(UfAffiliate) references UfAffiliate(UFID))"
SQL.write(query + ";\n")

query = "Create table ClassRoster(ClassID integer not null, UfAffiliate integer, foreign key(ClassID) references Class(ClassID), foreign key(UfAffiliate) references UfAffiliate(UFID))"
SQL.write(query + ";\n")

print "SQL script saved at: " + filename + "."
print "Enjoy!"
