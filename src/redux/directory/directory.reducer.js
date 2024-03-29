const INITIAL_STATE = {
    sections : [
            {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                pathUrl: 'shop/hats'
            },
            {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                pathUrl: 'shop/jackets'
            },
            {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                pathUrl: 'shop/sneakers'
            },
            {
                title: 'women',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                pathUrl: 'shop/womens'
            },
            {
                title: 'men',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                pathUrl: 'shop/mens'
            }
        ]
    }
 

const directoryReducer = (state = INITIAL_STATE, action ) => {
    switch (action.type){
        default:
            return state;
    }
}

export default directoryReducer;