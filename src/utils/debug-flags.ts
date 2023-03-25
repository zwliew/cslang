/**
 * Here, we set flags that will be used to toggle certain debug and console statements.
 * For now, we have just a few debug flags, but we can set up more fine-grained flags later if needed.
 */

export const DEBUG_FILE = 'log.txt'

export const DEBUG_WRITE_TO_FILE = false

// Print the final memory layout after execution
export const DEBUG_PRINT_MEMORY = false

// Print the final OS after execution
export const DEBUG_PRINT_FINAL_OS = false

// Print the agenda, stash, and environment before every step
export const DEBUG_PRINT_STEPS = false

// Print the state of analysis at every step
export const DEBUG_PRINT_ANALYSIS = false
