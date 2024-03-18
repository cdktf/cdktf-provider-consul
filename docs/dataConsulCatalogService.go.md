# `dataConsulCatalogService` Submodule <a name="`dataConsulCatalogService` Submodule" id="@cdktf/provider-consul.dataConsulCatalogService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulCatalogService <a name="DataConsulCatalogService" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service consul_catalog_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/dataconsulcatalogservice"

dataconsulcatalogservice.NewDataConsulCatalogService(scope Construct, id *string, config DataConsulCatalogServiceConfig) DataConsulCatalogService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig">DataConsulCatalogServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig">DataConsulCatalogServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.putQueryOptions">PutQueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetQueryOptions">ResetQueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutQueryOptions` <a name="PutQueryOptions" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.putQueryOptions"></a>

```go
func PutQueryOptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.putQueryOptions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetDatacenter"></a>

```go
func ResetDatacenter()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetId"></a>

```go
func ResetId()
```

##### `ResetQueryOptions` <a name="ResetQueryOptions" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetQueryOptions"></a>

```go
func ResetQueryOptions()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetTag"></a>

```go
func ResetTag()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataConsulCatalogService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/dataconsulcatalogservice"

dataconsulcatalogservice.DataConsulCatalogService_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/dataconsulcatalogservice"

dataconsulcatalogservice.DataConsulCatalogService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/dataconsulcatalogservice"

dataconsulcatalogservice.DataConsulCatalogService_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/dataconsulcatalogservice"

dataconsulcatalogservice.DataConsulCatalogService_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataConsulCatalogService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataConsulCatalogService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataConsulCatalogService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataConsulCatalogService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.queryOptions">QueryOptions</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList">DataConsulCatalogServiceQueryOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.service">Service</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList">DataConsulCatalogServiceServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.datacenterInput">DatacenterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.queryOptionsInput">QueryOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.datacenter">Datacenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `QueryOptions`<sup>Required</sup> <a name="QueryOptions" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.queryOptions"></a>

```go
func QueryOptions() DataConsulCatalogServiceQueryOptionsList
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList">DataConsulCatalogServiceQueryOptionsList</a>

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.service"></a>

```go
func Service() DataConsulCatalogServiceServiceList
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList">DataConsulCatalogServiceServiceList</a>

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.datacenterInput"></a>

```go
func DatacenterInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QueryOptionsInput`<sup>Optional</sup> <a name="QueryOptionsInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.queryOptionsInput"></a>

```go
func QueryOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.datacenter"></a>

```go
func Datacenter() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulCatalogServiceConfig <a name="DataConsulCatalogServiceConfig" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/dataconsulcatalogservice"

&dataconsulcatalogservice.DataConsulCatalogServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Datacenter: *string,
	Filter: *string,
	Id: *string,
	QueryOptions: interface{},
	Tag: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#name DataConsulCatalogService#name}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.datacenter">Datacenter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#datacenter DataConsulCatalogService#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.filter">Filter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#filter DataConsulCatalogService#filter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#id DataConsulCatalogService#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.queryOptions">QueryOptions</a></code> | <code>interface{}</code> | query_options block. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.tag">Tag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#tag DataConsulCatalogService#tag}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#name DataConsulCatalogService#name}.

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.datacenter"></a>

```go
Datacenter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#datacenter DataConsulCatalogService#datacenter}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#filter DataConsulCatalogService#filter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#id DataConsulCatalogService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `QueryOptions`<sup>Optional</sup> <a name="QueryOptions" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.queryOptions"></a>

```go
QueryOptions interface{}
```

- *Type:* interface{}

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#query_options DataConsulCatalogService#query_options}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#tag DataConsulCatalogService#tag}.

---

### DataConsulCatalogServiceQueryOptions <a name="DataConsulCatalogServiceQueryOptions" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/dataconsulcatalogservice"

&dataconsulcatalogservice.DataConsulCatalogServiceQueryOptions {
	AllowStale: interface{},
	Datacenter: *string,
	Namespace: *string,
	Near: *string,
	NodeMeta: *map[string]*string,
	Partition: *string,
	RequireConsistent: interface{},
	Token: *string,
	WaitIndex: *f64,
	WaitTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.allowStale">AllowStale</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#allow_stale DataConsulCatalogService#allow_stale}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.datacenter">Datacenter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#datacenter DataConsulCatalogService#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#namespace DataConsulCatalogService#namespace}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.near">Near</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#near DataConsulCatalogService#near}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.nodeMeta">NodeMeta</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#node_meta DataConsulCatalogService#node_meta}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.partition">Partition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#partition DataConsulCatalogService#partition}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.requireConsistent">RequireConsistent</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#require_consistent DataConsulCatalogService#require_consistent}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.token">Token</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#token DataConsulCatalogService#token}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.waitIndex">WaitIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#wait_index DataConsulCatalogService#wait_index}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.waitTime">WaitTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#wait_time DataConsulCatalogService#wait_time}. |

---

##### `AllowStale`<sup>Optional</sup> <a name="AllowStale" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.allowStale"></a>

```go
AllowStale interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#allow_stale DataConsulCatalogService#allow_stale}.

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.datacenter"></a>

```go
Datacenter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#datacenter DataConsulCatalogService#datacenter}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#namespace DataConsulCatalogService#namespace}.

---

##### `Near`<sup>Optional</sup> <a name="Near" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.near"></a>

```go
Near *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#near DataConsulCatalogService#near}.

---

##### `NodeMeta`<sup>Optional</sup> <a name="NodeMeta" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.nodeMeta"></a>

```go
NodeMeta *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#node_meta DataConsulCatalogService#node_meta}.

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.partition"></a>

```go
Partition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#partition DataConsulCatalogService#partition}.

---

##### `RequireConsistent`<sup>Optional</sup> <a name="RequireConsistent" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.requireConsistent"></a>

```go
RequireConsistent interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#require_consistent DataConsulCatalogService#require_consistent}.

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.token"></a>

```go
Token *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#token DataConsulCatalogService#token}.

---

##### `WaitIndex`<sup>Optional</sup> <a name="WaitIndex" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.waitIndex"></a>

```go
WaitIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#wait_index DataConsulCatalogService#wait_index}.

---

##### `WaitTime`<sup>Optional</sup> <a name="WaitTime" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.waitTime"></a>

```go
WaitTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#wait_time DataConsulCatalogService#wait_time}.

---

### DataConsulCatalogServiceService <a name="DataConsulCatalogServiceService" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/dataconsulcatalogservice"

&dataconsulcatalogservice.DataConsulCatalogServiceService {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataConsulCatalogServiceQueryOptionsList <a name="DataConsulCatalogServiceQueryOptionsList" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/dataconsulcatalogservice"

dataconsulcatalogservice.NewDataConsulCatalogServiceQueryOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataConsulCatalogServiceQueryOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.get"></a>

```go
func Get(index *f64) DataConsulCatalogServiceQueryOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataConsulCatalogServiceQueryOptionsOutputReference <a name="DataConsulCatalogServiceQueryOptionsOutputReference" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/dataconsulcatalogservice"

dataconsulcatalogservice.NewDataConsulCatalogServiceQueryOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataConsulCatalogServiceQueryOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetAllowStale">ResetAllowStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetNear">ResetNear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetNodeMeta">ResetNodeMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetRequireConsistent">ResetRequireConsistent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetWaitIndex">ResetWaitIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetWaitTime">ResetWaitTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowStale` <a name="ResetAllowStale" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetAllowStale"></a>

```go
func ResetAllowStale()
```

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetDatacenter"></a>

```go
func ResetDatacenter()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetNear` <a name="ResetNear" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetNear"></a>

```go
func ResetNear()
```

##### `ResetNodeMeta` <a name="ResetNodeMeta" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetNodeMeta"></a>

```go
func ResetNodeMeta()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetPartition"></a>

```go
func ResetPartition()
```

##### `ResetRequireConsistent` <a name="ResetRequireConsistent" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetRequireConsistent"></a>

```go
func ResetRequireConsistent()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetToken"></a>

```go
func ResetToken()
```

##### `ResetWaitIndex` <a name="ResetWaitIndex" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetWaitIndex"></a>

```go
func ResetWaitIndex()
```

##### `ResetWaitTime` <a name="ResetWaitTime" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetWaitTime"></a>

```go
func ResetWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.allowStaleInput">AllowStaleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.datacenterInput">DatacenterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.nearInput">NearInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.nodeMetaInput">NodeMetaInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.partitionInput">PartitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.requireConsistentInput">RequireConsistentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.waitIndexInput">WaitIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.waitTimeInput">WaitTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.allowStale">AllowStale</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.datacenter">Datacenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.near">Near</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.nodeMeta">NodeMeta</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.partition">Partition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.requireConsistent">RequireConsistent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.waitIndex">WaitIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.waitTime">WaitTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowStaleInput`<sup>Optional</sup> <a name="AllowStaleInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.allowStaleInput"></a>

```go
func AllowStaleInput() interface{}
```

- *Type:* interface{}

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.datacenterInput"></a>

```go
func DatacenterInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `NearInput`<sup>Optional</sup> <a name="NearInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.nearInput"></a>

```go
func NearInput() *string
```

- *Type:* *string

---

##### `NodeMetaInput`<sup>Optional</sup> <a name="NodeMetaInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.nodeMetaInput"></a>

```go
func NodeMetaInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.partitionInput"></a>

```go
func PartitionInput() *string
```

- *Type:* *string

---

##### `RequireConsistentInput`<sup>Optional</sup> <a name="RequireConsistentInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.requireConsistentInput"></a>

```go
func RequireConsistentInput() interface{}
```

- *Type:* interface{}

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `WaitIndexInput`<sup>Optional</sup> <a name="WaitIndexInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.waitIndexInput"></a>

```go
func WaitIndexInput() *f64
```

- *Type:* *f64

---

##### `WaitTimeInput`<sup>Optional</sup> <a name="WaitTimeInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.waitTimeInput"></a>

```go
func WaitTimeInput() *string
```

- *Type:* *string

---

##### `AllowStale`<sup>Required</sup> <a name="AllowStale" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.allowStale"></a>

```go
func AllowStale() interface{}
```

- *Type:* interface{}

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.datacenter"></a>

```go
func Datacenter() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Near`<sup>Required</sup> <a name="Near" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.near"></a>

```go
func Near() *string
```

- *Type:* *string

---

##### `NodeMeta`<sup>Required</sup> <a name="NodeMeta" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.nodeMeta"></a>

```go
func NodeMeta() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.partition"></a>

```go
func Partition() *string
```

- *Type:* *string

---

##### `RequireConsistent`<sup>Required</sup> <a name="RequireConsistent" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.requireConsistent"></a>

```go
func RequireConsistent() interface{}
```

- *Type:* interface{}

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `WaitIndex`<sup>Required</sup> <a name="WaitIndex" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.waitIndex"></a>

```go
func WaitIndex() *f64
```

- *Type:* *f64

---

##### `WaitTime`<sup>Required</sup> <a name="WaitTime" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.waitTime"></a>

```go
func WaitTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataConsulCatalogServiceServiceList <a name="DataConsulCatalogServiceServiceList" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/dataconsulcatalogservice"

dataconsulcatalogservice.NewDataConsulCatalogServiceServiceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataConsulCatalogServiceServiceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.get"></a>

```go
func Get(index *f64) DataConsulCatalogServiceServiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataConsulCatalogServiceServiceOutputReference <a name="DataConsulCatalogServiceServiceOutputReference" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/dataconsulcatalogservice"

dataconsulcatalogservice.NewDataConsulCatalogServiceServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataConsulCatalogServiceServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.createIndex">CreateIndex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.enableTagOverride">EnableTagOverride</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.meta">Meta</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.modifyIndex">ModifyIndex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.nodeAddress">NodeAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.nodeId">NodeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.nodeMeta">NodeMeta</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.nodeName">NodeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.taggedAddresses">TaggedAddresses</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceService">DataConsulCatalogServiceService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `CreateIndex`<sup>Required</sup> <a name="CreateIndex" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.createIndex"></a>

```go
func CreateIndex() *string
```

- *Type:* *string

---

##### `EnableTagOverride`<sup>Required</sup> <a name="EnableTagOverride" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.enableTagOverride"></a>

```go
func EnableTagOverride() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.meta"></a>

```go
func Meta() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ModifyIndex`<sup>Required</sup> <a name="ModifyIndex" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.modifyIndex"></a>

```go
func ModifyIndex() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeAddress`<sup>Required</sup> <a name="NodeAddress" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.nodeAddress"></a>

```go
func NodeAddress() *string
```

- *Type:* *string

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.nodeId"></a>

```go
func NodeId() *string
```

- *Type:* *string

---

##### `NodeMeta`<sup>Required</sup> <a name="NodeMeta" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.nodeMeta"></a>

```go
func NodeMeta() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `NodeName`<sup>Required</sup> <a name="NodeName" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.nodeName"></a>

```go
func NodeName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `TaggedAddresses`<sup>Required</sup> <a name="TaggedAddresses" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.taggedAddresses"></a>

```go
func TaggedAddresses() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataConsulCatalogServiceService
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceService">DataConsulCatalogServiceService</a>

---



