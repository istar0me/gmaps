var M = module.exports = {}

var place = {
    id: 'NQU', details: {
        address: '金大',
        phone: '0987487987',
        open_hours: '0~24'
    },
    id: 'NCKU', details: {
        address: '成大',
        phone: '0912345678',
        open_hours: '12~24'
    }
}

M.address = function (id) {
    // throw new Error('getDatils.address() not implemented!')
    if (id = 'place.id') return 'place.address'
}

M.phone = function () {
    throw new Error('getDetails.phone() not implemented!')
}

M.open_hours = function () {
}