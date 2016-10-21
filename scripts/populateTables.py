import csv
import random
filename = "buildDatabase.sql"
open(filename, 'w').close()
SQL = open(filename, 'w+')


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


#Person
print "Person, Guest, and UfAffiliate."
UFIDs = list()
personQueries = list()
personIndex = 0
guestIndex = 0
for index in range(0, 6000, 1):
    personID = str(personIndex)
    personIndex += 1
    percent = random.random()
    if(percent < 0.55):
        gender = "F"
        first = femaleFirstNames[random.randrange(0, len(femaleFirstNames))]
    else:
        gender = "M"
        first = maleFirstNames[random.randrange(0, len(maleFirstNames))]
    last = lastNames[random.randrange(0, len(lastNames))]
    monthInt = random.randrange(1,13)
    if monthInt in [1, 3, 5, 7, 8, 10, 12]:
        dayInt = random.randrange(1, 32)
    elif monthInt is 2:
        dayInt = random.randrange(1, 29)
    else:
        dayInt = random.randrange(1, 31)
    if(monthInt < 10):
        month = "0" + str(monthInt)
    else:
        month = str(monthInt)
    if(dayInt < 10):
        day = "0" + str(dayInt)
    else:
        day = str(dayInt)
    year = str(random.randrange(1990, 1998))

    query1 = "Insert into Person values(" + personID + ", '" + first + "', '" + last + "', '" + gender + \
             "', TO_DATE('" + year + "/" + month + "/" + day + " 00:00:00', 'yyyy/mm/dd hh24:mi:ss'));"

    if(index < 5500):           #UfAffiliate
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
        guestID = str(guestIndex)
        guestIndex += 1
        sponsor = str(UFIDs[random.randrange(0, len(UFIDs))])
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

        query2 = "Insert into Guest values(" + guestID + ", " + sponsor + ", TO_DATE('" + year + "/" + \
                 month + "/" + day + " 00:00:00', 'yyyy/mm/dd hh24:mi:ss')" + ", " + personID + ");"

    SQL.write(query1 + "\n")
    SQL.write(query2 + "\n")


#Facility, IntramuralTeam, Activity, CheckIn, Equipment, EquipmentTransaction, Class, IntramuralGame, IntramuralTeamRoster, ClassRoster


print "SQL script saved at: " + filename + "."
print "Enjoy!"