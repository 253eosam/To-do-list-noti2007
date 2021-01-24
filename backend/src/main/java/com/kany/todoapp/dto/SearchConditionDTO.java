package com.kany.todoapp.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SearchConditionDTO {
    
    private boolean inCompleted;

    private String keyWord;
}
