const express = require('express');
const HotelModel = require('../models/hotel');

const getAllRoomTypes = async(request, response) => {
    try {

        const data = request.body;

        return response.status(200).json({
            message: "Found the rooms",
            data
        })

    }catch(error){
        return response.status(500).json({
            message: "There was an error",
            error
        })
    }
}

// const createHotel = async(request, response) => {
//     try {
//         const body = request.body;
//         const newHotel = new HotelModel(body);
//         const hotelData = await newHotel.save();
//         return response.status(201).json({
//             message: "Hotel sucesfully created",
//             hotelData
//         })
//     } catch (error) {
//         return response.status(500).json({
//             message: "There was an error",
//             error
//         })
//     }
// }


// const updateHotel = async(request, response) => {
//     const id = request.params.id;
//     const incomingData = request.body
    
//     try{

//         let hotelData = await HotelModel.findByIdAndUpdate(id, incomingData, {returnOriginal: false});

//         return response.status(200).json({
//             message: `Successfully updated the hotel information!`,
//             data: hotelData
//         })
//     }catch(error){
//         return response.status(500).json({
//             message: `There was an error`
//         })
//     }
// }

// const deleteHotel = async(request, response) => {
//     const id = request.parms.id;

//     try{

//         let hotelData = await HotelModel.findByIdAndDelete(id);

//         return response.status(200).json({
//             message:   `Successfully deleted the hotel`
//         })

//     }catch(error){
//         return response.status(500).json({
//             message: `There was an error`,
//             error
//         })
//     }
// }

module.exports = {
    getAllRoomTypes
    // getAllHotels,
    // createHotel,
    // deleteHotel,
    // updateHotel
}