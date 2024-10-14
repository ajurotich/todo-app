import { DropdownButton, Dropdown } from "react-bootstrap"


export default function ToDoFilters({ setFilter, cats, refreshData }) {
	return (
		<>
			<DropdownButton title="Filter" variant="outline-success">
				<Dropdown.Item as="button" onClick={() => setFilter(-1)} >All</Dropdown.Item>
				{cats.map(cat => (
					<Dropdown.Item key={cat.categoryId} as="button"
						onClick={() => {
							setFilter(Number(cat.categoryId));
							refreshData();
						}} 
					>{cat.name}</Dropdown.Item>
				))}
			</DropdownButton>
		</>
	)
}