import {Stack, stack} from '@mui/material';
import { categories } from '../utils/constants';
import { Category } from '@mui/icons-material';

const selectedCategory = 'New';

const Sidebar = () => (
    <Stack
        direction="row"
        sx = {{
            overflow: "auto",
            height: {sx: 'auto', md:'95%'},
            flexDirection: {md:'column'}
        }}
    >
        {categories.map((Category)=>(
            <button
                key={Category.name}
                className='category-btn'
                style={{
                    background: Category.name === selectedCategory && '#FC1503',
                    color:'white'
                }}
            >
                <span style={{color:Category.name === selectedCategory ?'white' :'red', marginRight:'15px'}}>
                    {Category.icon}
                </span>
                <span style={{opacity: Category.name === selectedCategory ?'1': '0.8'}}
                >
                    {Category.name}
                </span>
            </button>
        ))}
    </Stack>
)

export default Sidebar