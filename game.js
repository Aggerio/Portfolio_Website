const CELL_SIZE_X = 10;
const CELL_SIZE_Y = 10;


let canvas = document.getElementById('game_of_life')
function fitToContainer(canvas) {
    // Make it visually fill the positioned parent
    canvas.style.width = '190%';
    canvas.style.height = '160%';
    // ...then set the internal size to match
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}

fitToContainer(canvas);

const ctx = canvas.getContext("2d");

const grid_x = parseInt(canvas.width / CELL_SIZE_X)
const grid_y = parseInt(canvas.height / CELL_SIZE_Y)
// initialize the grid
let grid = [];
for (let i = 0; i < grid_y; ++i) {
    let temp = [];
    for (let j = 0; j < grid_x; ++j) {
        temp.push(0);
    }
    grid.push(temp);
}

function getRandomRGBA(idx) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random().toFixed(2);

    return `rgba(${r}, ${g}, ${b}, ${idx})`;
}

//rendering based on the grid;
function renderGrid(grid_arr) {
    let canvas = document.getElementById('game_of_life')
    const grid_x = parseInt(canvas.width / CELL_SIZE_X)
    const grid_y = parseInt(canvas.height / CELL_SIZE_Y)
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    let factor = 255 / grid_x;
    for (let i = 0; i < grid_y; ++i) {
        for (let j = 0; j < grid_x; ++j) {
            // ctx.fillStyle() = `rgb(${j}, ${j}, ${j})`
            // ctx.fillStyle = 'rgb(' + parseInt(j * factor) + ',' + parseInt(j * factor) + ',' + parseInt(j * factor) + ')';
            // ctx.fillStyle = '#166e20';
            // ctx.fillStyle = getRandomRGBA(j / grid_x);
            if (Math.random() < 0.5) {

                ctx.fillStyle = 'rgb(25, 227, 48,' + j / grid_x + ')';
            }
            else {

                ctx.fillStyle = 'rgb(' + parseInt(j * factor) + ',' + parseInt(j * factor) + ',' + parseInt(j * factor) + ')';
            }

            if (grid_arr[i][j] == 1) {
                ctx.fillRect(j * CELL_SIZE_Y, i * CELL_SIZE_X, CELL_SIZE_X, CELL_SIZE_Y);
                // console.log(i * CELL_SIZE_X, j * CELL_SIZE_Y);
            }
        }
    }
}

// Game logic --> 
// Any live cell with fewer than two live neighbors dies, as if by underpopulation.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by overpopulation.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

//get the number of neighbours of a cell
function getNumNeighours(grid, x, y) {
    let ans = 0;
    try {
        if (grid[x - 1][y - 1] == 1) ans++;
    }
    catch (Exception) {
    }
    try {
        if (grid[x + 1][y + 1] == 1) ans++;
    }
    catch (Exception) { }
    try {

        if (grid[x - 1][y] == 1) ans++;
    }
    catch (Exception) { }

    try {

        if (grid[x][y - 1] == 1) ans++;
    }
    catch (Exception) { }
    try {

        if (grid[x + 1][y] == 1) ans++;
    }
    catch (Exception) { }
    try {

        if (grid[x][y + 1] == 1) ans++;
    }
    catch (Exception) { }
    return ans;
}

//calculate next iteration
function updateGrid(grid) {
    let len_x = grid[0].length;
    let len_y = grid.length;

    // console.log("len_x: ",len_x);
    // console.log("len_y: ", len_y);
    for (let i = 0; i < len_x; ++i) {
        for (let j = 0; j < len_y; ++j) {
            let neighbors = getNumNeighours(grid, i, j);
            if (neighbors > 3) grid[j][i] = 0;
            if (neighbors == 3) grid[j][i] = 1;
            if (neighbors < 2) grid[j][i] = 0;
        }
    }
    // console.log(grid);
    return grid;
}

// initialize random grid
function initializeGrid(grid) {
    let len_x = grid[0].length;
    let len_y = grid.length;
    for (let i = 0; i < len_y; ++i) {
        for (let j = 0; j < len_x; ++j) {
            if (Math.random() < 0.7) {
                grid[i][j] = 1;
            }
        }
    }
    return grid;
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function animate(grid, canvas, context, counter) {

    // console.log("Current counter: ", counter);
    requestAnimationFrame(async function () {
        if (counter < 20) {
            new_grid = updateGrid(grid);
            await sleep(100);
            animate(new_grid, canvas, context, counter + 1);
            renderGrid(grid);
        }
        else {
            new_grid = updateGrid(initializeGrid(grid))
            await sleep(100);
            animate(new_grid, canvas, context, 0);
            renderGrid(grid);
        }
    });
}
grid = initializeGrid(grid);
animate(grid, canvas, ctx, 0);
