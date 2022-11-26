import {
	FC, ReactElement, useState,
} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import FlexBox from '../styled/FlexBox';
import StyledColumn from './StyledColumn';
import Task from '../task/Task';
import ModalWindow from '../modal/ModalWindow';
import { ColumnPropsModel } from './interfaces';
import { ModalWindowStateModel } from '../modal/interfaces';

const Column: FC<ColumnPropsModel> = (props): ReactElement => {
	const {
		title, index, id, tasks, onDragOver, onDragLeave, onDragStart, onDragEnd, onDrop,
	} = { ...props };


	const [isModalOpened, setOpened] = useState<ModalWindowStateModel>(false);

	const openModal = () => {
		setOpened(true);
	};

	const closeModal = () => {
		setOpened(false);
	};

	const deleteColumn = () => {
		closeModal();
	};

	return (
		<>
			<StyledColumn
				data-column-index={index}
				draggable="true"
				onDragOver={onDragOver}
				onDragLeave={onDragLeave}
				onDragStart={onDragStart}
				onDragEnd={onDragEnd}
				onDrop={onDrop}
			>
				<FlexBox justifyContent='space-between'>
					<h3>{title}</h3>
					<IconButton aria-label="delete" size="small" onClick={openModal}>
						<DeleteIcon fontSize='small'/>
					</IconButton>
				</FlexBox>
				{tasks.map((task, idx) => <Task
					key={idx}
					title={task.title}
					description={task.description}
					index={idx}
					columnId={+id}
					columnIndex={index}
				/>)}
			</StyledColumn>
			<ModalWindow
				title={`Are you sure to delete the column "${title}"?`}
				description="This action cannot be undone"
				isOpened={isModalOpened}
				closeFunc={closeModal}
			>
				<Button onClick={closeModal}>Cancel</Button>
				<Button onClick={deleteColumn} variant='contained' autoFocus>
            Delete
				</Button>
			</ModalWindow>
		</>
	);
};

export default Column;
