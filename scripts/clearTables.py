filename = "clearTables.sql"
open(filename, 'w').close()
SQL = open(filename, 'w+')
query = "Delete from ClassRoster where ClassID>-1;"
SQL.write(query + "\n")

query = "Delete from IntramuralTeamRoster where TeamID>-1;"
SQL.write(query + "\n")

query = "Delete from IntramuralGame where GameID>-1;"
SQL.write(query + "\n")

query = "Delete from Class where ClassID>-1;"
SQL.write(query + "\n")

query = "Delete from EquipmentTransaction where TransactionID>-1;"
SQL.write(query + "\n")

query = "Delete from Equipment where EquipmentID>-1;"
SQL.write(query + "\n")

query = "Delete from CheckIn where CheckInID>-1;"
SQL.write(query + "\n")

query = "Delete from Guest where GuestID>-1;"
SQL.write(query + "\n")

query = "Delete from UfAffiliate where UFID>-1;"
SQL.write(query + "\n")

query = "Delete from Activity where ActivityID>-1;"
SQL.write(query + "\n")

query = "Delete from IntramuralTeam where TeamID>-1;"
SQL.write(query + "\n")

query = "Delete from Facility where FacilityID>-1;"
SQL.write(query + "\n")

query = "Delete from Person where PersonID>-1;"
SQL.write(query + "\n")


print "SQL script saved at: " + filename + "."
print "Enjoy!"
