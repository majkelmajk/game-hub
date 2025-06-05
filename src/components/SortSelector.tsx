import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";

interface Order {
    value: string
    label: string
}

interface Props {
    onSelectOrder: (sortOrder: string) => void
    selectedOrder: string | null
}

function SortSelector({onSelectOrder, selectedOrder}: Props) {
    const sortOrders: Order[] = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' }
    ]

    const currentSortOrder = sortOrders.find(order => order.value === selectedOrder)

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: {currentSortOrder ? currentSortOrder.label : 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrders.map((order) => (
                    <MenuItem
                        key={order.value}
                        onClick={() => onSelectOrder(order.value)}
                    >
                        {order.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}

export default SortSelector;