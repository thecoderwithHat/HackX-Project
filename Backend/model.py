import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import pickle as pickle
plt.style.use('fivethirtyeight')
colors=['#9db1f8','#217a36','#47bc8f','#947efd','#a4d835']
sns.set_palette(sns.color_palette(colors))
df = pd.read_csv("../input/cars-purchase-decision-dataset/car_data.csv")
df.sample(5)
#What is the shape of the dataset?
df.shape()
#Some info about our attributes and its datatype
df.info()
#Some analysis on the numerical columns
df.describe()
#Check for null values
df.isnull().sum()
#Check for duplicates in the dataset
df.duplicated().sum()
df.drop(['Year'],axis=1,inplace=True)
import warnings
warnings.filterwarnings('ignore')

fig,ax=plt.subplots(2,3,figsize=(25,15))
sns.distplot(df['Units Sold'],ax=ax[0,0])
sns.boxplot(y=df['Units Sold'],ax=ax[0,1])
sns.histplot(data=df,x='Units Sold',ax=ax[0,2],hue='Purchased',kde=True)

sns.distplot(df['Vehicle Model'],ax=ax[1,0])
sns.boxplot(y=df['Vehicle Model'],ax=ax[1,1])
sns.histplot(data=df,x='Vehicle Model',ax=ax[1,2],hue='Purchased',kde=True)
    
fig.tight_layout()
fig.subplots_adjust(top=0.95)
plt.suptitle("Visualizing Continuous Columns",fontsize=30)
sns.countplot(data=df,x='Vehicle Model')
plt.pie(df['Units Sold'].value_counts(),labels=df['Units Sold'].value_counts().index,autopct='%.2f',explode=[0,0.1])
plt.title("Class Imbalance")
plt.show()
fig,ax=plt.subplots(1,2,figsize=(20,10))
sns.histplot(data=df,x='Units Sold',ax=ax[0],hue='Gender',kde=True)
sns.histplot(data=df,x='AnnualSalary',ax=ax[1],hue='Gender',kde=True)

plt.show()
sns.pairplot(df,hue='Units Sold')
plt.show()
sns.heatmap(df.corr(),annot=True)
import plotly.express as px
fig = px.scatter(df, x='Age', y='AnnualSalary',color='Units Sold',symbol='Gender')
fig.show()
fig = px.density_contour(df, x='Age', y='AnnualSalary')
fig.show()
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
from sklearn.preprocessing import PowerTransformer
from sklearn import set_config
set_config(display='diagram')
transformer = ColumnTransformer(transformers=[('Encoder',OneHotEncoder(drop='first',sparse=False),['Vehicle Modeld']),('Yeo-Johnson',PowerTransformer(),['Units Sold','Price (INR)'])])
from sklearn.model_selection import train_test_split
X_train,X_test,y_train,y_test = train_test_split(df.drop(['Purchased'],axis=1),df['Purchased'],random_state=42,stratify=df['Purchased'],shuffle=True)
X_train=transformer.fit_transform(X_train)
X_train=transformer.fit_transform(X_train)
from imblearn.over_sampling import SMOTE
sm = SMOTE(random_state=42)
X_train, y_train = sm.fit_resample(X_train, y_train)
X_test,y_test = sm.fit_resample(X_test,y_test)
from sklearn.svm import SVC
from sklearn.model_selection import RandomizedSearchCV
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score
knn_scores=[]
for k in range(1,20):
    knn=KNeighborsClassifier(n_neighbors=k)
    scores=cross_val_score(knn,X_train,y_train,cv=5)
    knn_scores.append(scores.mean())

x_ticks = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
x_labels = x_ticks

plt.plot([k for k in range(1,20)],knn_scores)
plt.xticks(ticks=x_ticks, labels=x_labels)
plt.grid()
knn=KNeighborsClassifier(n_neighbors=13)
knn.fit(X_train,y_train)
from sklearn.metrics import confusion_matrix
confusion_knn=confusion_matrix(y_test,knn.predict(X_test))
plt.figure(figsize=(8,8))
sns.heatmap(confusion_knn,annot=True)
plt.xlabel("Predicted")
plt.ylabel("Actual")
from sklearn.metrics import classification_report
print(classification_report(y_test,knn.predict(X_test)))
param_grid={'C':[0.001,0.01,0.1,1,10,100], 'gamma':[0.001,0.01,0.1,1,10,100],'kernel':['linear','rbf','poly']}
rcv=RandomizedSearchCV(SVC(),param_grid,cv=5)
rcv.fit(X_train,y_train)
y_pred_svc=rcv.predict(X_test)
confusion_svc=confusion_matrix(y_test,rcv.predict(X_test))
plt.figure(figsize=(8,8))
sns.heatmap(confusion_svc,annot=True)
plt.xlabel("Predicted")
plt.ylabel("Actual")
print(classification_report(y_test,y_pred_svc))
print(f'\nBest Parameters of SVC model is : {rcv.best_params_}\n')
param_grid={'C':[0.001,0.01,0.1,1,10,100], 'max_iter':[50,75,100,200,300,400,500,700]}
log=RandomizedSearchCV(LogisticRegression(solver='lbfgs'),param_grid,cv=5)
log.fit(X_train,y_train)
y_pred_log=log.predict(X_test)
confusion_log=confusion_matrix(y_test,log.predict(X_test))
plt.figure(figsize=(8,8))
sns.heatmap(confusion_log,annot=True)
plt.xlabel("Predicted")
plt.ylabel("Actual")
print(classification_report(y_test,y_pred_log))



pickle.dump(log,open('model.pkl','wb'))
model1 = pickle.load(open('model.pkl','rb'))