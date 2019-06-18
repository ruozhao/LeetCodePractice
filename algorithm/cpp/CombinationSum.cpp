#include<vector>
#include<iostream>

class Solution {
public:
    vector<vector<int>> res;
    vector<int> col;
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        if(candidates.empty() )
           return res;
        sort(candidates.begin(),candidates.end());
        //combinationSum(candidates, target,0);
        combinationSum(candidates, target,0);
        return res;
    }

   /* 方法一：经典回溯
   void combinationSum(vector<int>& candidates, int target,int next)
    {
        if(target == 0)
        {
            res.push_back(col);
            return;
        }
        if(next ==candidates.size() || candidates[next]>target)
            return;
        col.push_back(candidates[next]);
        combinationSum(candidates, target-candidates[next],next);
        col.pop_back();
        //继续搜索此时达到target的下一个
        combinationSum(candidates, target,next+1);
    }*/

    //方法二：按层回溯
    void combinationSum(vector<int>& candidates, int target,int i)
    {
        if(target == 0)
        {
            res.push_back(col);
            return;
        }
        if(i ==candidates.size())
            return;
        for(;i<candidates.size();i++)
        {
            if(target-candidates[i] <0)
                return;
            col.push_back(candidates[i]);
            combinationSum(candidates, target-candidates[i],i);
            col.pop_back();
        }
    }
};

