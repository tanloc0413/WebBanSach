package com.fit.backend.model;

import lombok.Data;
import java.util.List;

@Data
public class DeliveryMethod {
    private int idDeliveryMethod; // mã phương thức giao hàng
    private String nameDeliveryMethod; // tên phương thức giao hàng
    private String description;
    private double deliveryCost;
    private List<Order> order;
}
