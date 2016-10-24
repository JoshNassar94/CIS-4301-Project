import csv
import random
filename = "buildDatabase.sql"
open(filename, 'w').close()
SQL = open(filename, 'w+')


#FUNCTIONS
def getDate():
    monthInt = random.randrange(1, 13)
    if monthInt in [1, 3, 5, 7, 8, 10, 12]:
        dayInt = random.randrange(1, 32)
    elif monthInt is 2:
        dayInt = random.randrange(1, 29)
    else:
        dayInt = random.randrange(1, 31)
    if (monthInt < 10):
        month = "0" + str(monthInt)
    else:
        month = str(monthInt)
    if (dayInt < 10):
        day = "0" + str(dayInt)
    else:
        day = str(dayInt)
    year = str(random.randrange(2015, 2016))
    return month, day, year


def getTime():
    hourInt = random.randrange(7, 22)
    if (hourInt < 10):
        hour = "0" + str(hourInt)
    else:
        hour = str(hourInt)
    minuteInt = random.randrange(0, 60)
    if (minuteInt < 10):
        minute = "0" + str(minuteInt)
    else:
        minute = str(minuteInt)
    return hour, minute






print "Reading in names!"
femaleFile = "../data/female-first.txt"
maleFile = "../data/male-first.txt"
lastFile = "../data/last-names.csv"
femaleFirstNames = list()
maleFirstNames = list()
lastNames = list()

print "Reading in female first names."
file = open(femaleFile)
femaleCSV = csv.reader(file)
for row in femaleCSV:
    name = row[0].split()
    femaleFirstNames.append(name[0].title())
file.close()

print "Reading in male first names."
file = open(maleFile)
maleCSV = csv.reader(file)
for row in maleCSV:
    name = row[0].split()
    maleFirstNames.append(name[0].title())
file.close()

print "Reading in last names."
file = open(lastFile)
lastCSV = csv.reader(file)
for row in lastCSV:
    lastNames.append(row[0])

print "Time to fake some data. whooop whoop!"


persons = list()
ufAffiliates = list()
guests = list()

#Person
print "Person, Guest, and UfAffiliate."
UFIDs = list()
personQueries = list()
personIndex = 0
guestIndex = 0
for index in range(0, 6000, 1):
    personID = str(personIndex)
    persons.append(personID)
    personIndex += 1
    percent = random.random()
    if(percent < 0.55):
        gender = "F"
        first = femaleFirstNames[random.randrange(0, len(femaleFirstNames))]
    else:
        gender = "M"
        first = maleFirstNames[random.randrange(0, len(maleFirstNames))]
    last = lastNames[random.randrange(0, len(lastNames))]
    month, day, garbage = getDate()
    year = str(random.randrange(1990, 1998))

    query1 = "Insert into Person values(" + personID + ", '" + first + "', '" + last + "', '" + gender + \
             "', TO_DATE('" + year + "/" + month + "/" + day + " 00:00:00', 'yyyy/mm/dd hh24:mi:ss'));"

    if(index < 5500):           #UfAffiliate
        ufAffiliates.append(personID)
        ufid = str(random.randrange(10000000, 99999999))
        while ufid in UFIDs:
            ufid = str(random.randrange(10000000, 99999999))
        UFIDs.append(ufid)
        email = first[0] + last + str(random.randrange(0, 9999)) + "@ufl.edu"
        phone = str(random.randrange(100, 999)) + "-" + str(random.randrange(100, 999)) + "-" + str(random.randrange(1000, 9999))
        percent = random.random()
        if(percent < 0.75):
            affiliation = "F"
        elif(percent >= 0.75 and percent < 0.93):
            affiliation = "P"
        else:
            affiliation = "E"
        percent = random.random()
        if((affiliation is "P" or affiliation is "E") and percent < 0.6):
            acitivityFee = "Y"
        else:
            acitivityFee = "N"
        password = first + last

        query2 = "Insert into UfAffiliate values(" + ufid + ", '" + email + "', '" + phone + "', '" + \
                 acitivityFee + "', '" + affiliation + "', '" + personID + "', '" + password + "');"

    else:           #Guest
        guests.append(personID)
        guestID = str(guestIndex)
        guestIndex += 1
        sponsor = str(UFIDs[random.randrange(0, len(UFIDs))])
        monthInt = random.randrange(1, 13)
        month, day, year = getDate()

        query2 = "Insert into Guest values(" + guestID + ", " + sponsor + ", TO_DATE('" + year + "/" + \
                 month + "/" + day + " 00:00:00', 'yyyy/mm/dd hh24:mi:ss')" + ", " + personID + ");"

    SQL.write(query1 + "\n")
    SQL.write(query2 + "\n")


#Facility
print "Facility"
numFacilities = 0
with open("../data/facilities.txt") as f:
    for line in f:
        SQL.write(line)
        numFacilities += 1


#IntramuralTeam
print "IntramuralTeam"
teamList = list()
teamSizeMap = dict()
teamTypeMap = dict()
teamIndex = 0
with open("../data/teams.txt") as f:
    for team in f:
        if not team in teamList:
            teamList.append(team.split(";")[0])
with open("../data/sports.txt") as f:
    for sport in f:
        sport = sport.split(";")[0]
        numTeams = random.randrange(18, 30, 2)
        alreadyTeam = list()
        if sport is "Softball":
            numPlayers = 10
        elif sport is "Basketball":
            numPlayers = 5
        elif sport is "Tennis":
            numPlayers = 1
        elif sport is "Volleyball":
            numPlayers = 6
        elif sport is "Soccer":
            numPlayers = 6
        elif sport is "Flag Football":
            numPlayers = 6
        else:
            numPlayers = 0

        for index in range(0, numTeams, 1):
            teamID = str(teamIndex)
            teamSizeMap[teamIndex] = numPlayers
            teamTypeMap[teamIndex] = sport
            teamIndex += 1
            teamName = teamList[random.randrange(0, len(teamList))]
            while(teamName in alreadyTeam):
                teamName = teamList[random.randrange(0, len(teamList))]
            alreadyTeam.append(teamName)

            query = "Insert into IntramuralTeam(" + teamID +", '" + teamName +"', '" + sport + "', 0, 0);"
            SQL.write(query + "\n")



#Activity
print "Activity, Class, IntramuralGame"
activityIndex = 0
classIndex = 0
gameIndex = 0
classCaps = list()
activityFacilityMap = list()
classNames = list()
sportNames = list()

with open("../data/classes.txt") as f:
    for line in f:
        classNames.append(line.split(";'")[0])

with open("../data/sports.txt") as f:
    for sport in f:
        sportNames.append(sport.split(";")[0])

for index in range(0, 20000, 1):
    activityID = str(activityIndex)
    activityIndex += 1
    facilityID = str(random.randrange(2, numFacilities))
    activityFacilityMap.append(facilityID)
    month, day, year = getDate()
    hour, minute =  getTime()

    query = "Insert into Activity values(" + activityID +", " + facilityID + ", TO_DATE('" + year + "/" + \
                 month + "/" + day + " " + hour + ":" + minute + ":00', 'yyyy/mm/dd hh24:mi:ss'));"
    SQL.write(query + "\n")

    if(index < 15000):      #Class
        classID = str(classIndex)
        classIndex += 1
        name = classNames[random.randrange(0, len(classNames))]
        capacity = str(random.randrange(20, 30))
        classCaps.append(int(capacity))
        instructorID = UFIDs[random.randrange(0, len(UFIDs))]
        query = "Insert into Class values(" + classID + ", '" + name + "', " + capacity + ", " + activityID + ", " + instructorID + ");"
        SQL.write(query + "\n")

    else:           #IntramuralGame
        gameID = str(gameIndex)
        gameIndex += 1
        sportType = sportNames[random.randrange(0, len(sportNames))]
        team1Score = str(random.randrange(0, 25))
        team2Score = str(random.randrange(0,25))
        team1ID = random.randrange(0, teamIndex)
        while(teamTypeMap[team1ID] <> sportType):
            team1ID = random.randrange(0, teamIndex)
        team2ID = random.randrange(0, teamIndex)
        while (teamTypeMap[team2ID] <> sportType):
            team2ID = random.randrange(0, teamIndex)
        query = "Insert into IntramuralGame values(" + gameID + ", '" + sportType + "', " + activityID + ", " + team1Score + \
                ", " + team2Score + ", " + str(team1ID) + ", " + str(team2ID) + ");"
        SQL.write(query + "\n")
        if(team1Score > team2Score):
            query1 = "Update IntramuralTeam set Wins=Wins+1 where TeamID=" + str(team1ID) + ");"
            query2 = "Update IntramuralTeam set Losses=Losses+1 where TeamID=" + str(team2ID) + ");"
        else:
            query1 = "Update IntramuralTeam set Wins=Wins+1 where TeamID=" + str(team2ID) + ");"
            query2 = "Update IntramuralTeam set Losses=Losses+1 where TeamID=" + str(team1ID) + ");"
        SQL.write(query1 + "\n")
        SQL.write(query2 + "\n")


#CheckIn
print "CheckIn"
checkInIndex = 0
for index in range(0, 60000, 1):
    checkInID = str(checkInIndex)
    checkInIndex += 1
    personID = str(random.randrange(0, len(persons)))
    month, day, year = getDate()
    hour, minute = getTime()
    activityIDInt = random.randrange(0, activityIndex)
    activityID = str(activityIDInt)
    facilityID = activityFacilityMap[activityIDInt]

    query = "Insert into CheckIn values(" + checkInID + ", " + personID + ", TO_DATE('" + year + "/" + month + "/" + \
            day + " " + hour + ":" + minute + ":00', 'yyyy/mm/dd hh24:mi:ss'), " + facilityID + ", " + activityID + ");"
    SQL.write(query + "\n")


#Equipment
print "Equipment"
equipIndex = 0
with open("../data/equipment.txt") as f:
    for equipment in f:
        count = random.randrange(30, 50)
        for index in range (0, count, 1):
            equipment = equipment.split(";")[0]
            equipID = str(equipIndex)
            equipIndex += 1
            percent = random.random()
            if(percent < 0.4):
                condition = "E"
            elif(percent < 0.8):
                condition = "G"
            else:
                condition = "P"

            facilityID = str(random.randrange(0, numFacilities))
            percent = random.random()
            if(percent < 0.6):
                status = "I"
            else:
                status = "O"

            query = "Insert into Equipment values(" + equipID + ", '" + equipment + "', '" + status + "', " + \
                    facilityID + ", '" + condition + "');"
            SQL.write(query + "\n")



#EquipmentTransaction
print "EquipmentTransaction"
transactionIndex = 0
lastTransaction = dict()
for index in range(0, 10000, 1):
    transactionID = str(transactionIndex)
    transactionIndex += 1
    equipID = random.randrange(0, equipIndex)
    equipmentID = str(equipID)
    person = str(random.randrange(0, len(persons)))
    while(not(person in ufAffiliates)):
        person = str(random.randrange(0, len(persons)))
    month, day, year = getDate()
    hour, minute = getTime()
    percent = random.random()
    if(equipID in lastTransaction):
        if(lastTransaction[equipID] is "I"):
            type = "O"
        else:
            type = "I"
    else:
        if(percent < 0.5):
            type = "I"
        else:
            type = "O"
    lastTransaction[equipID] = type
    query = "Insert into EquipmentTransaction values(" + transactionID + ", " + equipmentID + ", " + person + \
            ", TO_DATE('" + year + "/" + month + "/" + day + " " + hour + ":" + minute + ":00', 'yyyy/mm/dd hh24:mi:ss'), '" \
            + type + "');"
    SQL.write(query + "\n")
    query = "Update Equipment set status='" + type + "' where equipmentID=" + equipmentID + ";"
    SQL.write(query + "\n")






#IntramuralTeamRoster
print "IntramuralTeamRoster"
sportsPlayed = dict()
sports = list()
sportsPlayed[0] = sports
for index in range(0, teamIndex, 1):
    for player in range(0, teamSizeMap[index], 1):
        teamID = str(index)
        ufid = UFIDs[random.randrange(0, len(UFIDs))]
        if(ufid in sportsPlayed):
            while(teamTypeMap[index] in sportsPlayed[ufid]):
                ufid = UFIDs[random.randrange(0, len(UFIDs))]
        sports = sportsPlayed[ufid]
        sports.append(teamTypeMap[index])
        sportsPlayed[ufid] = sports
        ufidString = str(ufid)

        query = "Insert into IntramuralTeamRoster values(" + teamID + ", " + ufidString + ")"
        SQL.write(query + "\n")



#ClassRoster
print "ClassRoster"
classTaken = dict()
for index in range(0, classIndex, 1):
    classID = str(index)
    for person in range(0, classCaps[index], 1):
        ufid = str(UFIDs[random.randrange(0, len(UFIDs))])
        query = "Insert into ClassRoster values(" + classID + ", " + ufid + ");"
        SQL.write(query + "\n")


print "SQL script saved at: " + filename + "."
print "Enjoy!"
