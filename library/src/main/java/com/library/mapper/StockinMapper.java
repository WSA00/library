package com.library.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.library.pojo.Stockin;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface StockinMapper extends BaseMapper<Stockin> {
    void createStockin(@Param("stockin") Stockin stockin);

    List<Stockin> selectStockinPage(@Param("page") Integer page, @Param("pageSize") Integer pageSize);

}