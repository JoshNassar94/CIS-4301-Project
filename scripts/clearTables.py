filename = "clearTables.sql"
open(filename, 'w').close()
SQL = open(filename, 'w+')
query = "Delete from table ClassRoster where ClassID>-1;"
SQL.write(query + "\n")

query = "Delete from table IntramuralTeamRoster where TeamID>-1;"
SQL.write(query + "\n")

query = "Delete from table IntramuralGame where GameID>-1;"
SQL.write(query + "\n")

query = "Delete from table Class where ClassID>-1;"
SQL.write(query + "\n")

query = "Delete from table EquipmentTransaction where TransactionID>-1;"
SQL.write(query + "\n")

query = "Delete from table Equipment where EquipmentID>-1;"
SQL.write(query + "\n")

query = "Delete from table CheckIn where CheckInID>-1;"
SQL.write(query + "\n")

query = "Delete from table Guest where GuestID>-1;"
SQL.write(query + "\n")

query = "Delete from table UfAffiliate where UFID>-1;"
SQL.write(query + "\n")

query = "Delete from table Acitvity where ActivityID>-1;"
SQL.write(query + "\n")

query = "Delete from table IntramuralTeam where TeamID>-1;"
SQL.write(query + "\n")

query = "Delete from table Facility where FacilityID>-1;"
SQL.write(query + "\n")

query = "Delete from table Person where PersonID>-1;"
SQL.write(query + "\n")


print "SQL script saved at: " + filename + "."
print "Enjoy!"
