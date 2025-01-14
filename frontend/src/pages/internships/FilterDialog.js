// src/components/FilterDialog.js

import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, MenuItem } from "@mui/material";

const FilterDialog = ({ open, onClose, onApplyFilters }) => {
    const [filters, setFilters] = useState({
        length: "",
        salary: "",
        workType: "",
        location: "",
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const applyFilters = () => {
        onApplyFilters(filters);
        onClose();
    };

    const resetFilters = () => {
        setFilters({
            length: "",
            salary: "",
            workType: "",
            location: "",
        });
        onApplyFilters({
            length: "",
            salary: "",
            workType: "",
            location: "",
        });
        onClose();
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Filter Internships</DialogTitle>
            <DialogContent>
                <TextField
                    label="Length (e.g., 3)"
                    name="length"
                    value={filters.length}
                    onChange={handleFilterChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Minimum Salary"
                    name="salary"
                    type="number"
                    value={filters.salary}
                    onChange={handleFilterChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Work Type"
                    name="workType"
                    value={filters.workType}
                    onChange={handleFilterChange}
                    fullWidth
                    margin="normal"
                    select
                >
                    <MenuItem value="Remote">Remote</MenuItem>
                    <MenuItem value="On-Site">On-Site</MenuItem>
                    <MenuItem value="Hybrid">Hybrid</MenuItem>
                </TextField>
                <TextField
                    label="Location"
                    name="location"
                    value={filters.location}
                    onChange={handleFilterChange}
                    fullWidth
                    margin="normal"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={resetFilters}>Reset</Button>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={applyFilters} variant="contained">
                    Apply Filters
                </Button>
            </DialogActions>
        </Dialog>
    );
};


export default FilterDialog;
