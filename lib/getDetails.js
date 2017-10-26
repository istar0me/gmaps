var M = module.exports = {}

<<<<<<< HEAD
var place = [
    {
        "id": "highWall",
        "address": "金大",
        "phone": "0987487987",
        "open_hours": "0~24"
    },
    {
        "id": "tainan",
        "address": "成大",
        "phone": "0912345678",
        "open_hours": "12~24"
    }
]

M.address = function (id) {
    for (i = 0; i < place.length; i++) {
        if (id == place[i].id) {
            return place[i].address
        }
    }
||||||| merged common ancestors
M.address = function () {
    throw new Error('getDatils.address() not implemented!')
=======
var place = [
    {
        "id": 'highWall',
        "address": '金大',
        "phone": '0987487987',
        "open_hours": '0~24'
    },
    {
        "id": 'tainan',
        "address": '成大',
        "phone": '0912345678',
        "open_hours": '12~24'
    }
]

M.address = function (id) {
    // throw new Error('getDatils.address() not implemented!')
    for (i=0;i<1;i++){
    if (id == place[i].id)
    return place[i].address
    }
>>>>>>> 0f85df4e926bf6b63d16a8a6e3a88c69c95f2b50
}

<<<<<<< HEAD
M.phone = function (id) {
    for (i = 0; i < place.length; i++) {
        if (id == place[i].id) {
            return place[i].phone
        }
    }
||||||| merged common ancestors
M.phone = function() {
    throw new Error('getDetails.phone() not implemented!')
=======

M.phone = function (id) {
    //throw new Error('getDetails.phone() not implemented!')
    for (i=0;i<1;i++){
        if (id == place[i].id)
        return place[i].phone
        }
>>>>>>> 0f85df4e926bf6b63d16a8a6e3a88c69c95f2b50
}

<<<<<<< HEAD
M.open_hours = function (id) {
    for (i = 0; i < place.length; i++) {
        if (id == place[i].id) {
            return place[i].open_hours
        }
    }
||||||| merged common ancestors
M.open_hours = function() {
=======
M.open_hours = function (id) {
    for (i=0;i<1;i++){
        if (id == place[i].id)
        return place[i].open_hours
        }
>>>>>>> 0f85df4e926bf6b63d16a8a6e3a88c69c95f2b50
}