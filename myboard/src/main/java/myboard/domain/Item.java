package myboard.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Item {
    private Long id;
    private String name;
    private Long count;

    @Builder
    public Item(String name, Long count) {
        this.name = name;
        this.count = count;
    }

    public void initId(Long id) {
        this.id = id;
    }

    public void updateItem(String name, Long count) {
        this.name = name;
        this.count = count;
    }
}