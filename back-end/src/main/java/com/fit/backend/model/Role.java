package com.fit.backend.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "Role")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "role_ID")
    private int idRole; // mã quyền
    @Column(name = "role_name")
    private String nameRole; // tên quyền
    @ManyToMany(fetch = FetchType.LAZY, cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH
    })
    @JoinTable(
            name = "role_user",
            joinColumns = @JoinColumn(name="role_ID"),
            inverseJoinColumns = @JoinColumn(name = "user_ID")
    )
    private List<User> listUser; // danh sách người dùng
}
