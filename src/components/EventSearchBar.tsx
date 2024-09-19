import  { useState } from 'react';
import { Box, InputBase, Button, MenuItem, Select, Divider, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// import useSWR from 'swr';

interface EventSearchBarProps {
  onSearch: (searchTerm: string) => void;
  setCategory: (searchTerm: string) => void;
  categories: string[]; 
  category: string; 
}

const EventSearchBar = ({ onSearch, setCategory, category, categories }: EventSearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleCategoryChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(event.target.value as string);
    console.log(event.target.value)
  };
  console.log(categories)
  const handleSearch = () => {
    onSearch(searchTerm); // Pass search term and category to parent
  };
  return (
    <Box
      sx={{
        display: 'flex',
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
        sx={{ minWidth: '200px', padding: '8px' }}
      >
        <MenuItem value="">
          <em>All Categories</em>
        </MenuItem>
        {categories?.map((cat, index) => (
          <MenuItem key={index} value={cat.category}>
            {cat.category}
          </MenuItem>
        ))}
      </Select>
      {/* <Select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        displayEmpty
        sx={{ minWidth: '150px', marginLeft: '10px',textDecoration:"",  border: 'none', 
          '& fieldset': {
            border: 'none', 
          },
          '&:hover': {
            border: 'none', 
          },
          '&:focus': {
            border: 'none', 
          }}}
      >
        <MenuItem value="">
          <em>Categories</em>
        </MenuItem>
        <MenuItem value="conference">All</MenuItem>
        <MenuItem value="workshop">Comedy</MenuItem>
        <MenuItem value="meetup">Religious</MenuItem>
        <MenuItem value="meetup">Tech</MenuItem>
        <MenuItem value="meetup">Health</MenuItem>
        <MenuItem value="meetup">Fitness</MenuItem>
        <MenuItem value="meetup">Sports</MenuItem>
        <MenuItem value="meetup">Education</MenuItem>
      </Select> */}

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
