import Order from "./orders.model.js"

export class OrderServices {
    async findAllOrders(){
    return await Order.findAll()
    }

    async findOneOrder(id){
        return await Order.findOne(id)
    }

    async updateOrder(order,data){
        return await order.update(data)
    }

    
    async createOrder(data){
        return await Order.create(data)
    }

    async deleteOrder(order){
        return await order.update({
            status:"cancelled"
        })
    }

    async findAllUserOrders(){
        
    }

}