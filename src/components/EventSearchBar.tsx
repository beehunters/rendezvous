import  { useState } from 'react';
import { Box, InputBase, Button, MenuItem, Select, Divider, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SelectChangeEvent } from '@mui/material'; // Import SelectChangeEvent
import { EventSearchBarProps } from '../utils/interface';




const EventSearchBar = ({ onSearch, setCategory, category, categories }: EventSearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setCategory(event.target.value as string);
  };
  const handleSearch = () => {
    onSearch(searchTerm); // Pass search term and category to parent
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection:{md:"row", xs:'column'},
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: '30px',
        padding: '1rem',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '600px',
        marginLeft: ' auto',
      }}
    >
      {/* Search Icon */}
      <IconButton sx={{ padding: '0 8px' }}>
        <SearchIcon />
      </IconButton>

      {/* Search Input */}
      <InputBase
        placeholder="Search for an event"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ flex: 1, marginLeft: '10px' }}
      />

      {/* Divider between input and category */}
      <Divider orientation="vertical" flexItem />

      {/* Category Select Dropdown */}
      <Select
        value={category}
        onChange={handleCategoryChange}
        displayEmpty
        sx={{
          minWidth: '150px',
          marginLeft: '10px',
          border: 'none', // Remove border
          '& fieldset': {
            border: 'none', // Remove default border for outlined variant
          },
          '&:hover': {
            border: 'none', // Remove border on hover
          },
          '&:focus': {
            border: 'none', // Remove border on focus
          }
        }}      >
        <MenuItem value="">
          <em>All Categories</em>
        </MenuItem>
        {categories?.map((cat, index) => (
          <MenuItem key={index} value={cat.category}>
            {cat.category}
          </MenuItem>
        ))}
      </Select>


      {/* Search Button */}
      <Button
        variant="contained"
        onClick={handleSearch}
        sx={{ marginLeft: '10px', borderRadius: '20px', textTransform:"none", px:5, backgroundColor:"primary.light" }}
      >
        Search
      </Button>
    </Box>
  );
};

export default EventSearchBar;
