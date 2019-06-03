import React from 'react';


class TurnipData extends React.Component{

    constructor() {
        //in the real one this will do any setup to connect to the database

        this.fakeWantProduceDb = {
            carrots: ['marcus'],
            peas:[],
            bellpepers:['roxie']
        }

        this.fakeHaveProduceDb = {
            carrots: ['roxie'],
            peas: ['marcus'],
            bellpepers: []
        }

        this.fakeUserDb = {
            roxie: {
                firstName: 'Roxie',
                lastName: 'Epoxie',
                produceHave: {
                    carrots:2
                },
                produceWanted: {
                    bellpepers:3
                }
            },
            marcus: {
                firstName: 'Marcus',
                lastName: 'EFarcus',
                produceHave: {
                    peas:3
                },
                produceWatned: {
                    carrots:2
                }
            }
        }
    }

    getUserData(userId) {
        return this.fakeUserDb[userId];
    }

    getUsersWhoHaveProduce(produceId) {
        return this.fakeHaveProduceDb[produceId];
    }

    getUsersWhoWantProduce(produceId) {
        return this.fakeWantProduceDb[produceId];
    }

    updateProduceWant(userid, produceid, quantity) {
        this.fakeUserDb[userid].produceWanted[produceid] = quantity;

        if (!this.inArray(comparer)) {
            this.push(element);
        }

        //javascript hack to only add to array if item not already present
        if(quantity > 0) {
            // only add a user if they are not already in the array
            if (this.fakeWantProduceDb[produceid].indexOf(userid) === -1 ) {
                array.push(newItem)
            }
        } else {
            //remove the user by keeping anything in the array that isn't the user who wants no produce
            this.fakeWantProduceDb[produceid] = this.fakeWantProduceDb[produceid].filter((item)=> item !== userid)

        }
    }

    updateProduceHave(userid, produceid, quantity) {
        //same as above but on the this.fakeHaveProduceDb
    }
}
