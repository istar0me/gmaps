var M = module.exports = {}

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
}

var x = 3;

M.phone = function (id) {
    //throw new Error('getDetails.phone() not implemented!')
    for (i=0;i<1;i++){
        if (id == place[i].id)
        return place[i].phone
        }
}

M.open_hours = function (id) {
    for (i=0;i<1;i++){
        if (id == place[i].id)
        return place[i].open_hours
        }
}