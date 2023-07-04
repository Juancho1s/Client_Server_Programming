import org.w3c.dom.ranges.Range;

public class ClearPath {
    /*
     * The objective of this practice is to find the shortest path from
     * the top left (0,0) to the bottom right (n.length - 1, n.length - 1)
     */

    public static int pathLenght = 0;

    public static int shortestPathBinaryMatrix(int[][] grid) {
        int length = grid.length;
        if (length == 0 || grid[0][0] == 1 || grid[length - 1][length - 1] == 1) {
            return -1;
        }

        int pathLenghtChange = 1;

        recursivePath(grid, pathLenghtChange, new int[] { 0, 0 });

        if (pathLenght == 0) {
            return -1;
        } else {
            return pathLenght;
        }
    }

    private static void recursivePath(int[][] grid, int pathLenghtChange, int[] startPoint) {

        if (pathLenghtChange > pathLenght && pathLenght != 0) {
            return;
        }
        if (startPoint[0] == grid.length - 1 && startPoint[1] == grid.length - 1) {
            pathLenght = pathLenghtChange;
            return;
        }

        pathLenghtChange++;

        for (int i = 0; i < 7; i++) {
            
        }

        pathLenghtChange--;

    }

    private static void movements(int[][] grid, int pathLenghtChange, int[] startPoint, int axisX, int axisY) {
        if (axisX < grid.length && axisY < grid.length && grid[axisY][axisX] == 0) {
            recursivePath(grid, pathLenghtChange, new int[] { axisY, axisX });
        }
    }

    public static void main(String[] args) {

        // From (1,1) there are different options [Edges{(0,1),(1,2)},
        // Vertexes{(0,0),(0,2),(2,2)}]
        int[][] grid = {{ 0, 0, 0 },
                        { 1, 1, 0 },
                        { 1, 1, 0 } };

        System.out.println(shortestPathBinaryMatrix(grid));
    }

}