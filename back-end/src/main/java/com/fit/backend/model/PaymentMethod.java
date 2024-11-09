package com.fit.backend.model;

import lombok.Data;
import java.util.List;

@Data
public class PaymentMethod {
    private int idPaymentMethod; // mã phương thức thanh toán
    private String namePaymentMethod; // tên phương thức thanh toán
    private String description;
    private double paymentCost; // chi phí thanh toán
    private List<Order> listOrder;
}
