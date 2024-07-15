package com.library.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.library.pojo.History;
import com.library.pojo.Order;
import com.library.response.UserHistoryResponse;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface HistoryMapper extends BaseMapper<History> {
    Integer deleteHistoryByBookId(@Param("bid") Integer bid);

    void deleteHistoryByWarehouseId(@Param("wid") Integer wid);

    Long selectHistoryCount();

    List<History> selectHistoryPage(@Param("page") Integer page, @Param("pageSize") Integer pageSize);

    Order selectHistoryById(@Param("hid") Integer hid);

    void updateHistoryById(@Param("TableHistory") History TableHistory);

    void insertHistory(@Param("TableHistory") History TableHistory);

    void deleteHistoryById(@Param("id") Integer id);

    Double selectIncome();

    Integer sales();

    Integer warehouses();

    Integer users();

    List<Integer> selectTopUserId();

    List<String> selectTopUserName();

    Double selectSalesByYearAndUserId(@Param("year") Integer year, @Param("id") Integer id);

    List<Integer> selectTopCarId();

    List<String> selectTopCarName();

    List<String> selectTopCarModel();

    Integer selectSalesByYearAndCarId(@Param("year") Integer year, @Param("id") Integer id);


    List<UserHistoryResponse> selectHistoryByUserId(@Param("uid") String uid);

    Integer countHistoryByUserId(@Param("uid") String uid);

    Double salesHistoryByUserId(@Param("uid") String uid);

    Integer AverageCountHistoryByUserId();//平均借阅量

    Double AverageSalesOrderByUserId();
}
