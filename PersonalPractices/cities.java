import java.util.LinkedList;

public class cities {
    public static int findCircleNum(int[][] isConnected) {

        LinkedList<LinkedList<Integer>> provinces = new LinkedList<LinkedList<Integer>>();

        for (int i = 0; i < isConnected.length; i++) {
            int j = i;
            provinces.add(conections(j, i, isConnected));
        }
        for (int i = 0; i < provinces.size(); i++) {
            join(provinces.get(i), provinces);
        }

        return provinces.size();
    }

    private static LinkedList<Integer> conections(int indexX, int indexY, int[][] input) {
        LinkedList<Integer> ret = new LinkedList<Integer>();
        for (int i = indexX; i < input.length; i++) {
            if (input[i][indexY] == 1) {
                ret.add(i);
            }
        }
        return ret;
    }

    private static void join(LinkedList<Integer> conections, LinkedList<LinkedList<Integer>> provinces) {
        for (int i = 0; i < provinces.size(); i++) {
            for (int j = 0; j < conections.size(); j++) {
                if (provinces.get(i) != conections && provinces.get(i).contains(conections.get(j))) {
                    provinces.get(provinces.indexOf(conections)).addAll(provinces.get(i));
                    provinces.remove(i);
                    i = 0;
                    break;
                }
            }
        }
    }

    public static void main(String[] args) {
        int[][] input ={{1,0,0,1},
                        {0,1,1,0},
                        {0,1,1,1},
                        {1,0,1,1}};

        int container = findCircleNum(input);

        System.out.println(container);
    }
}